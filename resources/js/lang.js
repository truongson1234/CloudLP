import langEng from '../lang/eng.json' assert {type: 'json'};
import langVie from '../lang/vie.json' assert {type: 'json'};
import langJap from '../lang/jap.json' assert {type: 'json'};

i18next.init({
    lng: 'eng',
    resources: {
        eng: {
            translation: langEng.translation
        },
        vie: {
            translation: langVie.translation
        },
        jap: {
            translation: langJap.translation
        },
    }
}, function(err, t) {
    i18nextJquery.init(i18next, $);
    $("#main").localize();

    $('.header .header__lang .header__lang-link').click(function() {
        $(".header .header__lang .header__lang-link").toggleClass('active')
        i18next.changeLanguage(this.innerHTML);
        $("#main").localize();
    });
});