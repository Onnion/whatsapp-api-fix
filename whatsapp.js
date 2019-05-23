/**
 * Function to search in
 * 
 * @param {Error} error 
 */
function searchStackOverflow(error) {
    var $window = window.open('https://stackoverflow.com/search?q=' + error.message, '_blank');
    $window.focus();
}

/**
 * Function to get specific link for redirect whatsapp
 * 
 * @param {{search?: boolean, number: string | number, text?: string}} params
 * @return {string} urlRedirect
 */
function getRedirect(params) {
    var urlRedirect = '';

    try {
        var $navigator = navigator;
        var $userAgent = $navigator.userAgent;
        var $isMobile = $userAgent.includes('iPhone') || $userAgent.includes('Android') || $userAgent.includes('webOS') || $userAgent.includes('BlackBerry') || userAgent.includes('iPod');
        var $prefix = 'web';

        if ($isMobile) { $prefix = 'api'; }

        if (params.hasOwnProperty('text')) {
            urlRedirect = "http://" + $prefix + ".whatsapp.com/send?phone=" + params.number + "&text=" + params.text;
        } else {
            urlRedirect = "http://" + $prefix + ".whatsapp.com/send?phone=" + params.number + "&text=";
        }

    } catch (error) {
        console.error(error.message);
        if (params.hasOwnProperty('search')) {
            searchStackOverflow(error);
        }
    }

    return urlRedirect;
}

module.exports = { getRedirect: getRedirect }