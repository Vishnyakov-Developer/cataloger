let tg = window.Telegram.WebApp;
tg.expand();

Telegram.WebApp.onEvent('backButtonClicked', function(){
    const url = 'https://vishnyakov-developer.github.io/sitebot/';
    const catalogId = window.localStorage.getItem('catalog_id');

    window.location.replace(url +
        `?return=1`
    )
    return true;
});