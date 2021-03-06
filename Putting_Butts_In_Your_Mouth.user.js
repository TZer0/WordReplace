// ==UserScript==
// @name        Putting Butts In Your Mouth
// @namespace   TZer0
// @description Replaces words on pages viewed with other words of your choice
// @include     https://*
// @include     http://*
// @exclude     http://github.com/TZer0/*
// @exclude     https://github.com/TZer0/*
// @version     1
// @grant       none
// ==/UserScript==
(function() {
	'use strict';
	var i, j;
	var text, texts;
	var invalidTags = ["PRE", "BLOCKQUOTE", "CODE", "INPUT", "BUTTON", "TEXTAREA"]

	var replacements = [
		[/soul/g, 'butt'], // Please go here after installing: https://www.goodreads.com/quotes/tag/soul/
		[/Soul/g, 'Butt'],
		[/soul/ig, 'BUTT'],
		[/cloud/g, 'butt'],
		[/Cloud/g, 'Butt'],
		[/cloud/ig, 'BUTT'],
		[/bitcoin/g, 'buttcoin'],
		[/Bitcoin/g, 'Buttcoin'],
		[/Bitcoin/ig, 'BUTTCOIN'],
	];
	function isValid(tag) {
		return invalidTags.indexOf(tag) === -1;
	}

	texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
	for (i = 0; text = texts.snapshotItem(i); i+=1) {
		if (isValid(text.parentNode.tagName)) {
			replacements.forEach(function(value, j) {
				text.data = text.data.replace(value[0], value[1]);
			});
		}
	}
}());
