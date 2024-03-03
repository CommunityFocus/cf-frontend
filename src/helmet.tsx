import { Helmet } from "react-helmet-async";
// import { roomName } from '../common/common';
// import image from "./public/images/communityFocus-icon-meta.png"

 const HelmetTags = (props: {
    title: string,
    description: string,
    imageCard: string
}): JSX.Element => {

    const { 
            title,
            description,
            imageCard, 
        } = props;

    let joinTitle = `Join ${title}'s Timer!`

    return (
        <>
        <Helmet >
                <meta name='description' content={description} />
                <meta name="title" content={title} />
        /* OG Tags */
                <meta property="og:type" content="website" />
                <meta property="og:url" content= "https://communityfocus.app" />
                <meta property="og:title" content={joinTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageCard} />
            
                <meta property="og:image:width" content="38" />
                <meta property="og:image:height" content="40" />
            
                /* Twitter Card Meta Tags */
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://communityfocus.app/"/>
                <meta property="twitter:title" content={joinTitle} />
                <meta property="twitter:description" content={description} />
		        <meta property="twitter:image" content={imageCard}/>
            </Helmet>
         </>
    );
};
export default HelmetTags;