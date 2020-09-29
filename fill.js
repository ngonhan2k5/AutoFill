// (function(){
//     // console.log("Chrome Extension ready to go!");
//     if (chrome.runtime && !chrome.runtime.onMessage.hasListener(replace)) {
//         // console.log("Chrome Extension ready to go!");
//         console.log(document.URL, document.contentType);
//         chrome.runtime.onMessage.addListener(replace);
//     } 
//     //Replace
//     function replace(message, sender, sendresponse) {
//         console.log(message, sender, sendresponse);
//         let paragraphs = document.getElementsByTagName("p");
//         for (elt of paragraphs) {
//             elt.innerText = message;
//         }
//         console.log(document.getSelection().anchorNode);
        
//     }

//     var items = document.querySelectorAll('input').forEach(item => {
//         item.addEventListener('mouseenter', event => {
//             //handle click
//             let target = event.target;
//             // var rect = .getBoundingClientRect();

//             var bodyRect = document.body.getBoundingClientRect(),
//             elemRect = target.getBoundingClientRect(),
//             offsetTop1  = elemRect.top - bodyRect.top;
//             offsetLeft1 = elemRect.right - bodyRect.left;
            
//             console.log(12, offsetTop1, offsetLeft1);

//             let {top, left} = offset(target);

//             console.log(13, top, left);

//             showDiv(top, left)
//         })
//         item.addEventListener('mouseleave', event => {
//             hideDiv()
//         })
//         item.addEventListener('input', event => {
//             hideDiv()
//         })
//     })

//     function offset(el) {
//         var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.right + scrollLeft }
//     }

//     // example use
//     // var div = document.querySelector('div');
//     // var divOffset = offset(div);
//     // console.log(divOffset.left, divOffset.top);
//     // console.log(33, item[0])
//     var divCreated = document.getElementById('fill');
//     function showDiv(top, left){
//         if (!divCreated){
//             divCreated = document.createElement('div')
//             divCreated.innerHTML = "<span>aaa</span>"
//             divCreated.setAttribute('id', 'fill')
//             divCreated.style.position  = "absolute"
//             divCreated.style.zIndex = '999'
//             document.body.append(divCreated)
//             divCreated.addEventListener('mouseover', event => {
//                 showDiv()
//             })
//             divCreated.addEventListener('mouseout', event => {
//                 hideDiv()
//             })
//         }
//         divCreated.style.display = 'block'
//         if (top && left){
//             divCreated.style.top = top + "px"
//             divCreated.style.left = left - divCreated.clientWidth + "px"
//         }

//     }
//     function hideDiv(){
//         if (divCreated) divCreated.style.display = 'none'
//     }


//     class Fill {
//         constructor(){}
//         of(storage){
//             return [
//                 {content:'cnn@ddd.com', cate: 'email', terms:"", profile:"cnn"},
//                 {content:'abc@ddd.com', cate: 'email', terms:"", profile:"nhan"},
//             ]
//         }
//     }
//     (function Fill(w){
//         // addEventListener()
//     })(window)


// // chrome.runtime.onMessage.addListener(handleMessage);

// // function handleMessage(n, t, i) {
// //     var u, r, f;
// //     switch (n.type) {
// //         case "keyword":
// //             break;
// //     }
// // }

// })()