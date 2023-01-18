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

    $(".header .header__lang .header__lang-link").click(function() {
        $(".header .header__lang .header__lang-link").removeClass("active")
        $(this).addClass("active")

        // jap language change phone number
        $(".hotline-btn.btn-advise").attr('href', 'tel:02466886760')
        if ($(this)[0].classList.contains('jap')) {
            $(".hotline-btn.btn-advise").attr('href', 'tel:05053069989')
        }

        i18next.changeLanguage(this.innerHTML);
        $("#main").localize();
    });
});