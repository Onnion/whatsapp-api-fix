/**
 * Function to get specific link for redirect whatsapp
 * 
 * @param {string | number} number 
 * @param {string} text 
 * @return {string}
 */
function getRedirect(number, text = '') {
    var $userAgent = navigator.userAgent;
    var $isMobile = $userAgent.includes('iPhone') || $userAgent.includes('Android') || $userAgent.includes('webOS') || $userAgent.includes('BlackBerry') || userAgent.includes('iPod');

    return `http://${$isMobile ? 'api' : 'web' }.whatsapp.com/send?phone=${number}&text=${text}`;
}

module.exports = {
    getRedirect: getRedirect
}