/** HTML Code
 * <div id="parent">
 *     <div id="child1">
 *          <h1>child1 h1 tag</h1>
 *          <h2>child1 h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *          <h1>child1 h1 tag</h1>
 *          <h2>child1 h2 tag</h2>
 *     </div>
 * </div>
 */
/** React Code
 *  import React from "react";
    import ReactDOM from "react-dom/client";

    let parent = React.createElement('div', { id: "parent" },
        [
            React.createElement('div', { id: "child1" },
                [   React.createElement('h1', {}, "I am child1 h1 tag"),
                    React.createElement('h2', {}, "child1 h2 tag")
            ]),
            React.createElement('div', { id: "child2" },
                [   React.createElement('h1', {}, "I am child2 h1 tag"),
                    React.createElement('h2', {}, "I am child2 h2 tag")
            ])]
    );
    console.log(parent, typeof (parent))
    let root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent); 
    // converts the createElement to html tag and show it in browser
 */

import React from "react";
import ReactDom from 'react-dom/client';
import './App.css';

// React Element
/**
 * const heading = React.createElement(
    "h1",
    {id:'heading'},
    "Hello for React element 😍 "
);

//JSX // React Element
const jsxHeading = <h1 id="jsxHeading">Hello from JSX element 🚀 😍 </h1>
console.log(heading);
console.log(jsxHeading);
 */

/**
 * React Component 
const HeadingChild = () =>{
    return (
        <h2 id="headingChild">Hello from child Component 🚀 </h2>
    )
}

*/
/**
 * Header
 *  - Logo
 *  - Nov Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - Img
 *    - Name of Res, Star Rating, cuisine, rates
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard =(props)=>{
    const{resData} = props;
    const {name,cloudinaryImageId,avgRating,deliveryTime,costForTwo,cuisines} = resData?.data
    return (
        <div className="restaurantCard">
            <div className="resImgContainer">
                <img
                className="resImg"
                alt="resImg"
                src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/01/Chicken-Biryani.jpg"/>
            </div>
            <h3>{name}</h3>
            <h6>{cuisines.join(', ')}</h6>
            <h5>₹{costForTwo/100} for Two</h5>
            <h5>{avgRating} ⭐️</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
}

const cardList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "219",
        name: "Anjappar",
        uuid: "8791296b-70ce-441f-8f9c-7a25414db291",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "fa25f646f0f18e7b1d854e3e8b4a8f1b",
        cuisines: [
          "Chettinad",
          "Thalis",
          "Biryani",
          "Chinese",
          "Tandoor",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "anjappar-4th-b-block-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "4, 17th Main, Near BDA Complex, 100 Feet Road, 4th B Block,Koramangala",
        locality: "4th B Block",
        parentId: 61,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [{ type: "PROMOTED" }],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5850298~p=1~eid=00000186-20ad-87c6-0d5e-392c004e0163",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "219",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "229",
        name: "Meghana Foods",
        uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
        cuisines: [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood",
        ],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "meghana-foods-5th-block-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
        locality: "5th Block",
        parentId: 635,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "229",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "428",
        name: "Biryani Pot",
        uuid: "6db20a8b-dd85-4148-b750-107169f7f826",
        city: "1",
        area: "Btm Layout",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "mdipoyzfzsa7n7igskht",
        cuisines: ["North Indian", "Biryani"],
        tags: [],
        costForTwo: 50000,
        costForTwoString: "₹500 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 1.899999976158142,
        slugs: {
          restaurant: "biryani-pot-madiwala-junction-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        locality: "Maruti Nagar",
        parentId: 21798,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "428",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 1.899999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "65797",
        name: "Leon's - Burgers & Wings (Leon Grill)",
        uuid: "b5747bab-748b-4f2d-8856-25cd9a49efb3",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "r4ufflqojich0r29efvc",
        cuisines: [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental",
        ],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "leon-grill-koramangala-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
        locality: "KHB Colony",
        parentId: 371281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [{ type: "PROMOTED" }],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5834121~p=4~eid=00000186-20ad-87c6-0d5e-392d004e0472",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "65797",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "425",
        name: "Hotel Empire",
        uuid: "c0c37758-2e83-4429-aad6-eb94debb48f5",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "un4omn7rcunkmlw6vikr",
        cuisines: ["North Indian", "Kebabs", "Biryani"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "₹450 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "hotel-empire-5th-block-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
        locality: "Koramangala",
        parentId: 475,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "425",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "337335",
        name: "Kannur food kitchen",
        uuid: "c70b61bc-0f68-4e24-996b-749fbf295c35",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "a27weqanhnszqiuzsoik",
        cuisines: ["Kerala", "Biryani", "Beverages"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 2.5,
        slugs: {
          restaurant: "kannur-food-kitchen-btm-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
        locality: "1st  Stage",
        parentId: 114756,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FREE DELIVERY",
          shortDescriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "",
          shortDescriptionList: [
            {
              meta: "Free Delivery",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FREE DELIVERY",
              discountType: "FREE_DELIVERY",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "337335",
          deliveryTime: 35,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "71298",
        name: "Bengali Fun Foods",
        uuid: "a697d14f-c13a-49cb-8414-d12fa56bcc3b",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "ub9ng9le0lf7opxxbxey",
        cuisines: ["North Indian"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        slaString: "25-35 MINS",
        lastMileTravel: 2.700000047683716,
        slugs: {
          restaurant: "bengali-fun-foods-btm-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "No 66 35th main outer ring road BTM 2nd stage beside central silk board Bangalore 5600076",
        locality: "2nd Stage",
        parentId: 2600,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [{ type: "PROMOTED" }],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5886193~p=7~eid=00000186-20ad-87c6-0d5e-392e004e0703",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.7 kms",
        hasSurge: false,
        sla: {
          restaurantId: "71298",
          deliveryTime: 30,
          minDeliveryTime: 25,
          maxDeliveryTime: 35,
          lastMileTravel: 2.700000047683716,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.3",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "589",
        name: "Kabab Magic",
        uuid: "300faba1-8b85-41e6-8e91-b53093f5b3a5",
        city: "1",
        area: "Jayanagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "qfecnjsykkcpol7jbbzq",
        cuisines: ["North Indian", "Chinese", "Biryani", "Tandoor"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        slaString: "30-40 MINS",
        lastMileTravel: 4.599999904632568,
        slugs: {
          restaurant: "kabab-magic-3-9th-block-jayanagar",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "1548, East End Circle, 9th Block, Jayanagar, Bangalore",
        locality: "9th Block",
        parentId: 527,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "589",
          deliveryTime: 33,
          minDeliveryTime: 30,
          maxDeliveryTime: 40,
          lastMileTravel: 4.599999904632568,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "614642",
        name: "Soul Rasa",
        uuid: "cd59b85c-02d8-4b76-8e19-2012ce37fd75",
        city: "1",
        area: "Shanti Nagar",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "v9fczzlua1wnrx63fh1g",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        slaString: "35-45 MINS",
        lastMileTravel: 4.699999809265137,
        slugs: {
          restaurant: "soul-rasa-basavanagudi-basavanagudi",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "The Bowl Company, # 299,1st Floor, BBMP ward no 117, Akkithimanahalli , Shanthinagar, Bangalore 560025.",
        locality: "Akkithimanahalli",
        parentId: 239281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [{ type: "PROMOTED" }],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5810491~p=10~eid=00000186-20ad-87c6-0d5e-392f004e0a6a",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "4.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "614642",
          deliveryTime: 39,
          minDeliveryTime: 35,
          maxDeliveryTime: 45,
          lastMileTravel: 4.699999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "223",
        name: "Truffles",
        uuid: "8250cc38-4752-4f42-928b-4da5f01e5cbe",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
        cuisines: ["American", "Continental", "Desserts", "Italian"],
        tags: [],
        costForTwo: 45000,
        costForTwoString: "₹450 FOR TWO",
        deliveryTime: 37,
        minDeliveryTime: 37,
        maxDeliveryTime: 37,
        slaString: "37 MINS",
        lastMileTravel: 1.600000023841858,
        slugs: {
          restaurant: "truffles-ice-spice-5th-block-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "93/A, Appek Building, 'A' Wing,  4th 'B' Cross,  Koramangala Industrial Layout, 5th Block, Koramangala, Bangalore - 560 095",
        locality: "5th Block",
        parentId: 218065,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "223",
          deliveryTime: 37,
          minDeliveryTime: 37,
          maxDeliveryTime: 37,
          lastMileTravel: 1.600000023841858,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.4",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "527091",
        name: "Donne Biriyani Mane",
        uuid: "8ca9d65b-e2d6-4e24-b2ed-f7e33c034f99",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "xv6whbsjrmwayvnrbjjo",
        cuisines: ["Biryani", "Kebabs"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 0.8999999761581421,
        slugs: {
          restaurant: "donne-biriyani-mane-koramangala-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "NO 3/1 SONY WORLD SINGAL, 80 FEET ROAD, AVS LAYOUT, NEAR GKB OPTICALS 4TH BLOCK KORAMANGALA, BANGALORE, BTM Layout , B.B.M.P South, Karnataka - 560034",
        locality: "Avs Layout",
        parentId: 5628,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "527091",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 0.8999999761581421,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    }]

const BodyComp = () =>{
    return (
        <div className="bodyComp">
            <div className="search-container">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resData={cardList[0]}/>
                <RestaurantCard resData={cardList[1]}/>
                <RestaurantCard resData={cardList[2]}/>
                <RestaurantCard resData={cardList[3]}/>
                <RestaurantCard resData={cardList[4]}/>
                <RestaurantCard resData={cardList[5]}/>
                <RestaurantCard resData={cardList[6]}/>
                <RestaurantCard resData={cardList[7]}/>
                <RestaurantCard resData={cardList[8]}/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <BodyComp/>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
//Functions are not valid as a React child. 
//This may happen if you return Heading instead of <Heading /> from render.
// Or maybe you meant to call this function rather than return it.
root.render(<AppLayout/>); //we need to render in tag format as to babel to know.