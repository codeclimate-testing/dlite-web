'use strict';

import React from "react";

const GoogleAnalytics = (props) => {
  if (APP_ENV === 'production' && APP_MODE === 'public') {

    const initGA = () => {
      (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
          (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
          m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
      })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

      ga('create', 'UA-115994288-1', 'auto');
      ga('send', {
        hitType: 'pageview',
        page: location.pathname
      });
    };
    initGA();
  }
  return null;
};

export default GoogleAnalytics;