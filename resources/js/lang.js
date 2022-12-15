import langEng from '../lang/eng.json' assert {type: 'json'};
import langVie from '../lang/vie.json' assert {type: 'json'};

i18next.init({
    lng: 'eng',
    resources: {
        eng: {
            translation: langEng.translation
        },
        vie: {
            translation: langVie.translation
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