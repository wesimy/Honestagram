import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    GooglePlusShareButton,
    GooglePlusIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    TumblrShareButton,
    TumblrIcon,
    EmailShareButton,
    EmailIcon
} from 'react-share';

export default ({ datasource, size , shareurl = window.location.href,responsive = true }) => {
    console.log(shareurl);
    return (
        <ul className="uk-iconnav">
            <li data-uk-tooltip="Share on Facebook" className=""><FacebookShareButton quote={datasource.displayName} url={shareurl}><FacebookIcon size={size} /></FacebookShareButton></li>
            <li data-uk-tooltip="Share on Twitter" className=""><TwitterShareButton hashtags={["honestgram"]} title={datasource.displayName} url={shareurl}><TwitterIcon size={size} /></TwitterShareButton></li>
            <li data-uk-tooltip="Share on Linkedin" className=""><LinkedinShareButton title={datasource.displayName} description={datasource.wallDescription} url={shareurl}><LinkedinIcon size={size} /></LinkedinShareButton></li>
            <li data-uk-tooltip="Share on Google Plus" className=""><GooglePlusShareButton url={shareurl}><GooglePlusIcon size={size} /></GooglePlusShareButton></li>
            <li data-uk-tooltip="Share on Tumblr" className={`${(responsive)? 'uk-visible@s': ''} `}><TumblrShareButton url={shareurl}><TumblrIcon size={size} /></TumblrShareButton></li>
            <li data-uk-tooltip="Share on Email" className={`${(responsive)? 'uk-visible@s': ''} `}><EmailShareButton subject={datasource.displayName} url={shareurl}><EmailIcon size={size} /></EmailShareButton></li>
            {
                (responsive)?
                <li  className="uk-hidden@s">

                <button type="button" data-uk-icon="icon:more;"></button>
                <div uk-dropdown="pos: bottom-justify; boundary: .uk-comment-header; boundary-align: true" className="uk-padding-small" >
                    <p>Share on</p>
                    <ul className="uk-iconnav ">
                        <li data-uk-tooltip="Facebook" ><FacebookShareButton quote={datasource.displayName} url={shareurl}><FacebookIcon size={size} /></FacebookShareButton></li>
                        <li data-uk-tooltip="Twitter" ><TwitterShareButton hashtags={["honestgram"]} title={datasource.displayName} url={shareurl}><TwitterIcon size={size} /></TwitterShareButton></li>
                        <li data-uk-tooltip="Linkedin" ><LinkedinShareButton title={datasource.displayName} description={datasource.wallDescription} url={shareurl}><LinkedinIcon size={size} /></LinkedinShareButton></li>
                        <li data-uk-tooltip="Google Plus" ><GooglePlusShareButton url={shareurl}><GooglePlusIcon size={size} /></GooglePlusShareButton></li>
                        <li data-uk-tooltip="Tumblr" ><TumblrShareButton url={shareurl}><TumblrIcon size={size} /></TumblrShareButton></li>
                        <li data-uk-tooltip="Email" ><EmailShareButton subject={datasource.displayName} url={shareurl}><EmailIcon size={size} /></EmailShareButton></li>
                    </ul>
                </div>

            </li>
            :
            ''
            }
        </ul>
    )
}
