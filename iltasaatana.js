(function($){
	$.fn.extend({
		addSatan: function(options) {
			var defaults = {
					excludeChildren: false,
					beforeChars: ["\"", "?", "!"],
					appendStr: "saatana",
					delimiter: " ",
			};
			var options = $.extend(defaults, options);
			
			return this.each(function() {
				var o = options;
				
				// Remove child nodes
				if(o.excludeChildren) {
					tmpChildren = $(this).children().clone();
					$(this).children().remove();
				}
				
				// Current element text
				var currSpan = $(this).text();
				
				// Remove leading/trailing whitespace
				currSpan = currSpan.trim();
				
				// Get last word for word case test
				var lastWord = currSpan.split(/\s+/).pop();
				
				// Detect case
				var appendStr = (lastWord == lastWord.toUpperCase()) ? o.appendStr.toUpperCase() : o.appendStr;
				
				// Detect chars and prepend
				var prepended = false;				
				$(o.beforeChars).each(function(index, value) {
					lastCharIndex = currSpan.length-1;
					if(currSpan.charAt(lastCharIndex) == value) {
						currSpan = currSpan.substring(0, lastCharIndex) + o.delimiter + appendStr + value + o.delimiter;
						prepended = true;
					} 
				});
				
				// Append
				if(!prepended) currSpan += o.delimiter + appendStr + o.delimiter;
				
				// Modify
				$(this).html(currSpan);
				
				// Append earlier removed child nodes
				if(o.excludeChildren) {
					$(this).append(tmpChildren);
				}
			});
		}
	});
})(jQuery);

/* Selectors */

/* -- BODY -- */

// Headlines
$(".juttuotsikko > a > span:last-of-type").addSatan();

// Most read: Terveys
$(".pvn_kolme_luetuinta_nosto p a:not(.palstakuva)").addSatan();

/* -- LEFT SIDE -- */

// Latest headlines + misc. articles
$(".vasen > p > a:not(.palstakuva)").addSatan({excludeChildren: true});

// Forums
$(".jive_osasto > a").addSatan();

// Latest news
$("#tuoreimmat > p > a").addSatan({excludeChildren: true});

/* -- RIGHT SIDE -- */

// Headlines widget
$(".widget--paaaiheet > div > p > a").addSatan();

// Most read articles
$("#iltab_luetuimmat div p a").addSatan();

// Most latest articles
$("#iltab_tuoreimmat div p a").addSatan({excludeChildren: true});

// IL-TV widget
$(".widget--iltv div p a:not(.palstakuva)").addSatan();

// Most read: Uutiset
$(".widget--uutiset div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Viihde
$(".widget--viihde div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Urheilu
$(".widget--urheilu div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Terveys
$(".widget--terveys div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Tyyli.com
$(".widget--tyylicom div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Asuminen
$(".widget--asuminen div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Autot
$(".widget--autot div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Matkailu
$(".widget--matkailu div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Ruoka
$(".widget--ruoka div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Rakkaus & Seksi
$(".widget--rakkausjaseksi div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Nainen
$(".widget--nainen div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Perhe
$(".widget--perhe div p a:not(.palstakuva) .list-title").addSatan();

// Most read: Digi
$(".widget--digi div p a:not(.palstakuva) .list-title").addSatan();

// Opinions: Jouko
$(".widget--mielipide__paakirjoitus-jouko div p:first a:not(.palstakuva)").addSatan();

// Blogs
$(".widget--blogit div p a:not(.palstakuva)").addSatan();

// "Hullu Maailma"
$(".widget--hullumaailma div p a:not(.palstakuva)").addSatan();

// IL-TV most watched
$(".widget--iltv-katsotuimmat div p a:not(.palstakuva)").addSatan();

/* -- FOOTER -- */
$(".footer_luetuimmat_container .kehyselem p a .list-title").addSatan();