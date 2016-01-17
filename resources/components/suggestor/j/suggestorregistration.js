var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
    var content = this.querySelector('template').content.querySelector('.suggest');
    var clone = document.importNode(content, true);
    this.appendChild(clone);
};

proto.attachedCallback = function() {
    var suggestorURL = {
        relatedConcept: "http://suggest.naukri.com/suggest/autoconcepts?",
        checkVersion: "http://suggest.naukri.com/suggest/v?",
        prefetch: "http://suggest.naukri.com/suggest/prefetch?",
        trackingURL: "http://suggestlg.naukri.com/logger/log",
        autoComplete: "http://suggest.naukri.com/suggest/autosuggest?"
    };


    var commonParams = {
        url: suggestorURL,
        multiSearch: $.parseJSON(this.getAttribute('multisearch')),
        whiteListSpecialChar: "+#/.",
        appId: 119,
        prefetchData: {
            key: "__infoEdge/prefetch",
            userCookie: "MYNAUKRI[UNID]"
        },
        startSearchAfter: $.parseJSON(this.getAttribute('startsearchafter')),
        appId: $.parseJSON(this.getAttribute('appId'))
    };
    
    $(this.querySelector('.suggest')).suggestor($.extend({}, commonParams, {
        category: $.parseJSON(this.getAttribute('category')),
        showRelatedConcept: $.parseJSON(this.getAttribute('showrelatedconcept')),
        whiteListSpecialChar: '+',
        maxSuggestions: 5,
        relatedConceptsCategory: {
            'company': "company"
        },
        sourceId: 4000,
        maxSuggestions: $.parseJSON(this.getAttribute('maxsuggestion'))
    }));

};

document.registerElement('nk-suggestor', {
    prototype: proto
});