var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    var content = this.querySelector('template').content.querySelector('.singleDD');
    var clone = document.importNode(content, true);
    this.appendChild(clone);
}

proto.attachedCallback = function() {
    $(this.querySelector('.singleDD')).singleDD({
        data: $.parseJSON(this.getAttribute('data'))
    });
    //var shadowRoot = this.createShadowRoot();
    //shadowRoot.innerHTML = this.innerHTML;
    //shadowRoot.innerHTML += '<style>.singleDD .dWrap { border: solid #ccc; border-width: 1px; position: relative; }.singleDD { background-color: #fff; position: relative;}.singleDD .dWrap { position: relative; }.singleDD .sdTxt { cursor: pointer; border: 0; padding: 10px; }.singleDD .smArw { display: inline-block; right: 10px; top: 18px; z-index: 1; position: absolute; margin: 0; }.singleDD .sDrop { position: absolute; background-color: #fff; display: none; max-height: 340px; overflow-y: auto; -webkit-box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); z-index: 45; }.singleDD .sDrop ul { border: solid #cccccc \9; border-width: 0 1px 1px 1px\9; }.singleDD .sDrop li { padding: 6px 5px 6px 10px; cursor: pointer; margin: 0; }.singleDD .sAct { color: #3875D7; font-weight: bold; }.singleDD.zIndexIE7 { *z-index: 10; }</style>';
}


document.registerElement('nk-droope', {
    prototype: proto
})
