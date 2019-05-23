class WhatsappFix {
    /**
     * Function to search in
     * 
     * @param {Error} error 
     */
    searchStackOverflow(error) {
        try {
            var $window = window.open('https://stackoverflow.com/search?q=' + error.message, '_blank');
            $window.focus();
        } catch (error) {
            console.error('searchStackOverflow() :', error.message);
        }

    }

    /**
     * Function to get specific link for redirect whatsapp
     * 
     * @param {{search?: boolean, number: string | number, text?: string}} params
     * @return {string} urlRedirect
     */
    getRedirect(params) {
        var urlRedirect = '';

        if (!params.hasOwnProperty('number') || !params || (params && !params.number)) { 
            console.error('Param `number` is required');
            return;
        }

        try {
            var $userAgent = navigator.userAgent;
            var $isMobile = $userAgent.includes('iPhone') || $userAgent.includes('Android') || $userAgent.includes('webOS') || $userAgent.includes('BlackBerry') || $userAgent.includes('iPod');
            var $prefix = 'web';

            if ($isMobile) { $prefix = 'api'; }

            if (params.hasOwnProperty('text')) {
                urlRedirect = "http://" + $prefix + ".whatsapp.com/send?phone=" + params.number + "&text=" + params.text;
            } else {
                urlRedirect = "http://" + $prefix + ".whatsapp.com/send?phone=" + params.number + "&text=";
            }

        } catch (error) {
            console.error('getRedirect() :', error.message);
            if (params.hasOwnProperty('search')) {
                searchStackOverflow(error);
            }
        }

        return urlRedirect;
    }
}