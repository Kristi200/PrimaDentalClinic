import React from 'react'
import ReactGA from 'react-ga';

const GoogleAnalyticsTracker = (category = "Event category") => {
    const trackEvent = (action = "action", label = "label") => {
        ReactGA.event({
            category,
            action,
            label
        })
        return trackEvent
    }
}

export default GoogleAnalyticsTracker