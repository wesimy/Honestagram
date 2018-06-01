import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    TumblrShareButton,
    EmailShareButton,
} from 'react-share';
const PageSocialShare = ({url}) => {
    return (
        <FacebookShareButton url={shareUrl} >facebook share</FacebookShareButton>
    )
}
 
export default PageSocialShare;