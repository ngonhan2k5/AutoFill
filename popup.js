// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeKeyword = document.getElementById('save');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

changeKeyword.onclick = function (element) {
    let kw = txtKeyword.value;
    kw = kw.split(',').map(k=>k.trim())
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // chrome.tabs.executeScript(
        //     tabs[0].id,
        //     {code: 'document.body.style.backgroundColor = "' + color + '";'});

        chrome.tabs.sendMessage(tabs[0].id, {
            type: "keyword",
            keywords: kw

        })

        chrome.runtime.sendMessage({
            type: "keyword",
            keywords: kw
        })
    });
};

let txtKeyword = document.getElementById('keyword');

chrome.storage.sync.get('keywords', function (data) {
    console.log('popup', data.keywords);
    if (data && data.keywords)
        txtKeyword.value = data.keywords.join(', ');

});
