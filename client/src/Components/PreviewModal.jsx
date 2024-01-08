import { setContexts } from "../Context"

export default function PreviewModal(){
    const {displayPreviewModal,setDisplayPreviewModal} = setContexts()
    
    const currentImage=()=>{
        switch(displayPreviewModal){
            case 2:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_a600a7d4ca954543e22f571a9629521a13f82143.1920x1080.jpg?t=1701931405',
                    '1',
                    {display:'none'},
                    {display:'block'}
                ]
            case 3:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_cd0262c5abf8a90ee5e1059acafc5a92b6be0e73.1920x1080.jpg?t=1701931405',
                    '2',
                    {display:'block'},
                    {display:'block'}
                ]
            case 4:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_3db385fc1223914dadb199ac8682683a8c59454e.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_3db385fc1223914dadb199ac8682683a8c59454e.1920x1080.jpg?t=1701931405',
                    '3',
                    {display:'block'},
                    {display:'block'}
                ]
            case 5:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_6032c9336c6cf9c1ebc914cedf022b38e97fd271.1920x1080.jpg?t=1701931405',
                    '4',
                    {display:'block'},
                    {display:'block'}
                ]
            case 6:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f6cbfeea728d557fa9f483685fea3205f08f5d9e.1920x1080.jpg?t=1701931405',
                    '5',
                    {display:'block'},
                    {display:'block'}
                ]
            case 7:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_551f06a43b72609d7ca3cd63e93c58e949d58384.1920x1080.jpg?t=1701931405',
                    '6',
                    {display:'block'},
                    {display:'block'}
                ]
            case 8:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_f4ea4f0f93cc8b38042f6d5916413da185ec221c.1920x1080.jpg?t=1701931405',
                    '7',
                    {display:'block'},
                    {display:'block'}
                ]
            case 9:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_553301e2432883e9f026fe1dd0e91d7a8886d6f1.1920x1080.jpg?t=1701931405',
                    '8',
                    {display:'block'},
                    {display:'block'}
                ]
            case 10:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_9b4abc60696de192c40064364a1395ad5074e5c3.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_9b4abc60696de192c40064364a1395ad5074e5c3.1920x1080.jpg?t=1701931405',
                    '9',
                    {display:'block'},
                    {display:'block'}
                ]
            case 11:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_15a86a1c4175f9392127265735c177a91535de65.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_15a86a1c4175f9392127265735c177a91535de65.1920x1080.jpg?t=1701931405',
                    '10',
                    {display:'block'},
                    {display:'block'}
                ]
            case 12:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_ad81cc7ced8585ad344ba50e9d0b4bf9c597e62e.1920x1080.jpg?t=1701931405',
                    '11',
                    {display:'block'},
                    {display:'block'}
                ]
            case 13:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_4ba939a383dc363c14e6cb7995322f39a5a26b07.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_4ba939a383dc363c14e6cb7995322f39a5a26b07.1920x1080.jpg?t=1701931405',
                    '12',
                    {display:'block'},
                    {display:'block'}
                ]
            case 14:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_988d92f03856895ef73a636ad20c2951086b865c.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_988d92f03856895ef73a636ad20c2951086b865c.1920x1080.jpg?t=1701931405',
                    '13',
                    {display:'block'},
                    {display:'block'}
                ]
            case 15:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_8db2e5f40b64e105c7174b3d3679fce6d7a04d20.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_8db2e5f40b64e105c7174b3d3679fce6d7a04d20.1920x1080.jpg?t=1701931405',
                    '14',
                    {display:'block'},
                    {display:'block'}
                ]
            case 16:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_b3c171e257dd1a3173254b1b61a7995dec204df4.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_b3c171e257dd1a3173254b1b61a7995dec204df4.1920x1080.jpg?t=1701931405',
                    '15',
                    {display:'block'},
                    {display:'block'}
                ]
            case 17:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_64ae63dcfde6612266cf72884132fa144908b777.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_64ae63dcfde6612266cf72884132fa144908b777.1920x1080.jpg?t=1701931405',
                    '16',
                    {display:'block'},
                    {display:'block'}
                ]
            case 18:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_0c218f8040f1d7850baff4ff4e3109942388ac98.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_0c218f8040f1d7850baff4ff4e3109942388ac98.1920x1080.jpg?t=1701931405',
                    '17',
                    {display:'block'},
                    {display:'block'}
                ]
            case 19:
                return [
                    "https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_e79d3106549c1269a14888f2095e4c667643c3ad.jpg?t=1701931405",
                    'https://cdn.akamai.steamstatic.com/steam/apps/892970/ss_e79d3106549c1269a14888f2095e4c667643c3ad.1920x1080.jpg?t=1701931405',
                    '18',
                    {display:'block'},
                    {display:'none'}
                ]
        }
    }

    return(
        <>
            <div className="newmodal_background" style={{opacity:0.8,display:'block'}} onClick={()=>{setDisplayPreviewModal(0)}}></div>
            <div className="screenshot_popup_modal" style={{position: 'fixed', zIndex: 1000, maxWidth: '1185px', maxHeight: '731px', left: '50px', top: '63px'}}>
                <div className="screenshot_popup_modal_content">
                    <div className="screenshot_popup_modal_title">
                        <a href={currentImage()[0]}>{'Download full-size version '}
                            <img src="https://store.akamai.steamstatic.com/public/images/v5/ico_external_link.gif"></img>
                        </a>
                    </div>
                    <div className="screenshot_img_ctn">
                        <img src={currentImage()[1]} style={{opacity:1,maxWidth:'1145px',maxHeight:'657px'}}/>
                    </div>
                    <div className="screenshot_popup_modal_footer">
                        <div>{currentImage()[2]} of 18 screenshots</div>
                        <div className="btnv6_blue_hoverfade btn_medium previous" style={currentImage()[3]} onClick={()=>{setDisplayPreviewModal(displayPreviewModal-1)}}>
                            <span>Prev</span>
                        </div>
                        <div className="btnv6_blue_hoverfade btn_medium next" style={currentImage()[4]} onClick={()=>{setDisplayPreviewModal(displayPreviewModal+1)}}>
                            <span>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}