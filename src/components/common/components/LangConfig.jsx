// LangConfig.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Initialize language
const savedLang = localStorage.getItem("lang");
const defaultLang = savedLang || "en";

// Define translations
const resources = {
  en: {
    translation: {
      font: "font-poppins",
      dir: "ltr",
      topHeader:
        "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
      shop: "ShopNow",
      welcome: "Welcome to the E-Commerce Website",

      home: "Home",
      contact: "Contact",
      about: "About",
      signUp: "Sign Up",
      account: "My Account",

      headerIcons: {
        1: "Manage My Account",
        2: "My Order",
        3: "My Cancellations",
        4: "My Reviews",
        5: "Logout",
      },
      search: "Search...",
      homeSections: {
        row1: {
          col1: [
            "Women's Fashion",
            "Men's Fashion",
            "Technology",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ],
          col2: ["Men's & Women's Wear", "Up to 10% off Voucher", "Shop Now"],
        },
        row2: ["Today’s", "Flash Sales", "Days", "Hours", "Minutes", "Seconds"],
      },
      removeFromCart: "Remove from Cart",
      addToCart: "Add to Cart",
      new: "NEW",
      itemsArray: {
        0: {
          title: "Quilted Satin Jacket",
          type: "Jackets",
          details:
            "Stay stylish and warm with this quilted satin jacket, perfect for adding a trendy touch to your outfit.",
        },
        1: {
          title: "The North Coat",
          type: "Coats",
          details:
            "Stay warm and fashionable with The North Coat, featuring a durable construction and timeless design.",
        },
        2: {
          title: "Classic Denim Jacket",
          type: "Jackets",
          details:
            "A timeless denim jacket that pairs effortlessly with any outfit, offering both comfort and style.",
        },
        3: {
          title: "Leather Biker Jacket",
          type: "Jackets",
          details:
            "A premium leather biker jacket that brings an edgy and bold look, crafted for durability and comfort.",
        },
        4: {
          title: "Winter Puffer Coat",
          type: "Coats",
          details:
            "A heavy-duty puffer coat designed to keep you warm in the coldest weather while maintaining a stylish appeal.",
        },
        5: {
          title: "Cotton Flannel Shirt",
          type: "Shirts",
          details:
            "A soft and breathable flannel shirt, perfect for layering in chilly weather while ensuring maximum comfort.",
        },
        6: {
          title: "Slim Fit Formal Shirt",
          type: "Formal Wear",
          details:
            "A sleek slim-fit formal shirt, ideal for office wear and special occasions, offering a refined and elegant look.",
        },
        7: {
          title: "Casual Polo Shirt",
          type: "Casual Wear",
          details:
            "A comfortable and versatile polo shirt that works great for both casual and semi-formal occasions.",
        },
        8: {
          title: "Hooded Parka Jacket",
          type: "Jackets",
          details:
            "A trendy and warm hooded parka jacket, perfect for outdoor adventures and everyday wear.",
        },
        9: {
          title: "Wool Blend Overcoat",
          type: "Coats",
          details:
            "A sophisticated wool blend overcoat that provides warmth and elegance during the winter season.",
        },
        10: {
          title: "Vintage Corduroy Shirt",
          type: "Shirts",
          details:
            "A classic vintage-style corduroy shirt, offering a retro aesthetic with modern comfort.",
        },
        11: {
          title: "Double-Breasted Trench Coat",
          type: "Coats",
          details:
            "An elegant double-breasted trench coat, perfect for adding a refined touch to your outfit.",
        },
        12: {
          title: "Linen Short Sleeve Shirt",
          type: "Casual Wear",
          details:
            "A breathable linen short sleeve shirt, great for warm weather and relaxed outings.",
        },
        13: {
          title: "Padded Bomber Jacket",
          type: "Jackets",
          details:
            "A trendy padded bomber jacket that keeps you warm while maintaining a sleek and sporty look.",
        },
        14: {
          title: "Suede Shirt Jacket",
          type: "Jackets",
          details:
            "A stylish suede shirt jacket that blends casual and sophisticated styles effortlessly.",
        },
        15: {
          title: "Tweed Blazer Coat",
          type: "Formal Wear",
          details:
            "A tailored tweed blazer coat, perfect for professional or semi-formal occasions.",
        },
        16: {
          title: "Heavyweight Plaid Shirt",
          type: "Shirts",
          details:
            "A durable and warm heavyweight plaid shirt, great for layering in the colder months.",
        },
        17: {
          title: "Sherpa-Lined Denim Jacket",
          type: "Jackets",
          details:
            "A cozy sherpa-lined denim jacket, combining warmth and rugged style for the winter season.",
        },
        18: {
          title: "Waterproof Raincoat",
          type: "Coats",
          details:
            "A lightweight yet durable waterproof raincoat, ensuring protection against wet weather.",
        },
        19: {
          title: "Longline Wool Coat",
          type: "Formal Wear",
          details:
            "A sophisticated longline wool coat, ideal for business or evening wear in colder climates.",
        },
        20: {
          title: "Relaxed Fit Henley Shirt",
          type: "Casual Wear",
          details:
            "A classic relaxed-fit Henley shirt, offering a comfortable and versatile addition to your casual wardrobe.",
        },
      },
      categories: {
        jackets: "Jackets",
        coats: "Coats",
        shirts: "Shirts",
        casualWear: "Casual Wear",
        formalWear: "Formal Wear",
      },
      services: {
        0: {
          value: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140 ",
        },

        1: {
          value: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        2: {
          value: "MONEY BACK GUARANTEE",
          description: "We reurn money within 30 days",
        },
      },
      redButtons: {
        viewAllProducts: "View All Products",
        viewAll: "View All",
        exploreByCategory: "Explore By Category",
        buyNow: "Buy Now",
        sendMassage: "Send Massage",
        createAccount: "Create Account",
        login: "Log In",
        applyCoupon: "Apply Coupon",
        processToCheckout: "Process to checkout",
        placeOrder: "Place Order",
        backToHomePage: "Back to home page",
        chooseByCategory: "Choose By Category",
      },
      whiteButtons: {
        backToHomePage: "Back to Home Page",
        loadMore: "Load More..",
        moveAllToBag: "Move All to Bag",
        seeAll: "See All",
        returnToShop: "Return to Shop",
        updateCart: "Update Cart",
      },

      wishlist: {
        title: "Wishlist",
        justForYou: "Just for you",
      },
      cart: {
        header: {
          product: "Product",
          price: "Price",
          quantity: "Quantity",
          subtotal: "Subtotal",
        },
        cartTotal: "Cart Total",
        total: "Total",
        subtotal: "Subtotal",
        shipping: "Shipping",
        free: "Free",
      },
      checkOut: {
        title: "Checkout",
        billingDetails: "Billing Details",
        firstName: "First Name",
        company: "Company Name",
        Country: "Country",
        address: "Street Address",
        city: "Town / City",
        phone: "Phone",
        email: "Email Address",
        apartment: "Apartment, floor, etc. (optional)",
        methods: "Payment Methods",
        bank: "Bank (Visa)",
        cash: "Cash on Delivery",
        couponCode: "Coupon Code",
      },
      payment: {
        payment: "Payment Details",
        number: "Card Number",
        enter: "Enter your card number",
        expirationDate: "Expiration Date",
      },
      productPage: {
        relatedItems: "Related Items",
        colors: "Colors",
        size: "Size",
        inStock: "In Stock",
        reviews: "Reviews",
        review: "Review",
        1: "Free Delivery",
        1.1: "Enter your postal code for Delivery Availability",
        2: "Return Delivery",
        2.1: "Free 30 Days Delivery Returns.Details",
      },
      contactPage: {
        call: "Call To Us",
        available: "We are available 24/7, 7 days a week.",
        phone: "Phone",
        write: "Write To US",
        fillForm: "Fill out our form and we will contact you within 24 hours.",
        emails: "Emails",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourPhone: "Your Phone Number",
        yourMessage: "Your Message",
      },
      aboutPage: {
        title: "About",
        story: "Our Story",
        paragraph1:
          "Launced in 2024, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.",
        paragraph2:
          "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.",
        card1: "Sellers active on our site",
        card2: "Monthly Product Sales",
        card3: "Customers active on our site",
        card4: "Annual gross sale on our site",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "Tom Cruise",
        name2: "Tom Hanks",
        name3: "Will Smith",
        name4: "Tom Hardy",
        job1: "Founder & Chairman",
        job2: "CTO",
        job3: "CEO",
        job4: "Product Designer",
      },
      accountPage: {
        setMassage: "Account details updated successfully!",
        welcome: "Welcome! ",
        home: "Home",
        myAccount: "My Account",
        ManageMyAccount: "Manage My Account",
        myProfile: "My Profile",
        addressBook: "Address Book",
        myPaymentOptions: "My Payment Options",
        myOrders: "My Orders",
        myReturns: "My Returns",
        myCancelations: "My Cancelations",
        myWishlist: "My Wishlist",
        editYourProfile: "Edit Your Profile",
        firstName: "First Name",
        yourFirstName: "your first name",
        lastName: "Last Name",
        yourLastName: "your last name",
        email: "Email",
        yourEmail: "your email",
        address: "Address",
        yourAddress: "your address",
        passwordChanges: "Password Changes",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        cancel: "Cancel",
        saveChanges: "Save Changes",
      },

      signUpPage: {
        title: "Create an account",
        enter: "Enter your details below:",
        email: "Email",
        password: "Password",
        createAccount: "Create Account",
        withGoogle: "Sign up with Google",
        haveAccount: "Already have an account?",
        login: "Log in",
      },
      loginPage: {
        title: "Log in to Exclusive",
        enter: "Enter your details below:",
        emailOrPhone: "Email or Phone Number",
        password: "Password",
        forgot: "Forgot Password?",
        notHaveAccount: "Don't have an account?",
        login: "Log In",
      },
      Snackbar: {
        inCart: "Items already in the cart!",
        movedToCart: "Items moved to the cart successfully!",
        noItems: "No items to move to the cart!",
      },
      category: {
        redTitle: "Categories",
        title: "Browse By Category",
        categories: {
          0: "Jackets",
          1: "Coats",
          2: "Shirts",
          3: "Casual Wear",
          4: "Formal Wear",
          5: "Accessories",
        },

      },
      bestSelling: {
        redTitle: "This Month",
        title: "Best Selling Products",
      },
      deal: {
        greenTitle: "Categories",
        title: "Enhance Your Listening Experience",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        buyNow: "Buy Now!",
      },
      allProducts: {
        redTitle: "Our Products",
        title: "Explore Our Products",
        byCategory: "Explore By Category",
      },
      featured: {
        redTitle: "Featured",
        title: "New Arrival",
        shopNow: "Shop Now",
        playStation: {
          title: "PlayStation 5",
          description: "Black and White version of the PS5 coming out on sale.",
        },
        WomenCollections: {
          title: "Women’s Collections",
          description: "Featured woman collections that give you another vibe.",
        },
        speakers: {
          title: "Speakers",
          description: "Amazon wireless speakers",
        },
        perfume: {
          title: "Perfume",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "Subscribe",
        offer: "Get 10% off your first order",
        enterEmail: "Enter your email",
        enterPassword: "Enter your password",
        account: "Account",
        myAccount: "My Account",
        sign: "Login / Register",
        cart: "Cart",
        wishlist: "Wishlist",
        shop: "Shop",
        downloadApp: "Download App",
        save: "Save $3 with App New User Only",
        support: "Support",
        address: "123 Baker Street Manchester, M1 2AB, UK",
        quickLinks: "Quick Links",
        privacy: "Privacy Policy",
        usage: "Terms Of Use",
        FAQ: "FAQ",
        Contact: "Contact",
        copyrights: "© Copyright Rimel 2025. All rights reserved",
        allRightsReserved: "© All rights reserved",
      },
    },
  },
  ar: {
    translation: {
      font: "font-noto",
      dir: "rtl",
      topHeader:
        "تخفيضات الصيف على جميع بدلات السباحة والتوصيل السريع المجاني - خصم 50%!",
      shop: "تسوق الآن",
      welcome: "مرحبًا بك في موقع التجارة الإلكترونية",
      home: "الصفحة الرئيسية",
      contact: "اتصل بنا",
      about: "من نحن",
      signUp: "إنشاء حساب",
      account: "حسابي",
      headerIcons: {
        1: "إدارة حسابي",
        2: "طلبي",
        3: "إلغاءاتي",
        4: "تقييماتي",
        5: "تسجيل الخروج",
      },
      search: "...بحث",
      homeSections: {
        row1: {
          col1: [
            "أزياء النساء",
            "أزياء الرجال",
            "إلكترونيات",
            "المنزل ونمط الحياة",
            "الطب",
            "الرياضة والهواء الطلق",
            "ألعاب الأطفال",
            "البقالة والحيوانات الأليفة",
            "الصحة والجمال",
          ],
          col2: ["ملابس رجالية ونسائية", "حتى 10% خصم القسيمة", "تسوق الآن"],
        },
        row2: ["اليوم", "عروض الفلاش", "أيام", "ساعات", "دقائق", "ثواني"],
      },
      removeFromCart: "إزالة من السلة",
      addToCart: "أضف إلى السلة",
      new: "جديد",
      "itemsArray": {
        "0": {
          "title": "سيارة كهربائية للأطفال",
          "type": "ألعاب",
          "details": "سيارة كهربائية مثيرة للأطفال للقيادة بأناقة، توفر ساعات من الترفيه والمرح."
        },
        "1": {
          "title": "كاميرا CANON EOS DSLR",
          "type": "تكنولوجيا",
          "details": "التقاط صور وفيديوهات مذهلة بهذه الكاميرا الاحترافية من كانون DSLR، مثالية لهواة التصوير."
        },
        "2": {
          "title": "طعام كلب جاف للسلالة",
          "type": "حيوانات أليفة",
          "details": "طعام كلب جاف غذائي للحفاظ على صحة وسعادة صديقك الفروي، مصنوع من مكونات عالية الجودة."
        },
        "3": {
          "title": "لابتوب ASUS FHD للألعاب",
          "type": "تكنولوجيا",
          "details": "تجربة ألعاب عالية الأداء مع لابتوب ASUS FHD، الذي يتميز برسومات متقدمة ولعب سلس."
        },
        "4": {
          "title": "مجموعة منتجات Curology",
          "type": "عناية شخصية",
          "details": "مجموعة كاملة للعناية بالبشرة من Curology لتنظيفها وترطيبها وحمايتها، مما يجعلها ناعمة ومشرقة."
        },
        "5": {
          "title": "جيمباد USB GP11 Shooter",
          "type": "ألعاب",
          "details": "تعزيز تجربة الألعاب الخاصة بك مع جيمباد USB GP11 Shooter، الذي يتميز بتحكم دقيق وجودة عالية."
        },
        "6": {
          "title": "جاكيت ساتان مبطن",
          "type": "ملابس",
          "details": "ابقَ أنيقًا ودافئًا مع جاكيت ساتان مبطن، مثالي لإضافة لمسة عصرية إلى ملابسك."
        },
        "7": {
          "title": "رف كتب صغير",
          "type": "أثاث",
          "details": "نظم كتبك والأشياء الزخرفية بشكل أنيق مع هذا الرف الصغير للكتب، مصمم ليناسب المساحات المدمجة."
        },
        "8": {
          "title": "مبرد سائل لوحدة المعالجة المركزية RGB",
          "type": "تكنولوجيا",
          "details": "احتفظ بوحدة المعالجة المركزية باردة مع مبرد سائل RGB، الذي يتميز بمضخة عالية الأداء وإضاءة قابلة للتخصيص."
        },
        "9": {
          "title": "حقيبة سفر Gucci",
          "type": "إكسسوارات",
          "details": "سافر بأناقة مع حقيبة سفر Gucci، المصنوعة من مواد فاخرة ومصممة للمتانة والفخامة."
        },
        "10": {
          "title": "معطف The North Face",
          "type": "ملابس",
          "details": "ابقَ دافئًا وعصريًا مع معطف The North Face، الذي يتميز ببناء متين وتصميم خالد."
        },
        "11": {
          "title": "جيمباد HAVIT HV-G92",
          "type": "ألعاب",
          "details": "استمتع بتحكم دقيق مع جيمباد HAVIT HV-G92، المصمم لساعات من المتعة في الألعاب."
        },
        "12": {
          "title": "لوحة مفاتيح سلكية AK-900",
          "type": "تكنولوجيا",
          "details": "اكتب بسرعة ودقة باستخدام لوحة المفاتيح السلكية AK-900، التي تتميز ببناء متين وتصميم مريح."
        },
        "13": {
          "title": "شاشة ألعاب IPS LCD",
          "type": "تكنولوجيا",
          "details": "استمتع بجودة صور مذهلة وتجربة لعب سلسة مع شاشة ألعاب IPS LCD."
        },
        "14": {
          "title": "كرسي راحة من السلسلة S",
          "type": "أثاث",
          "details": "استرخ في راحة مع كرسي الراحة من السلسلة S، المصمم لساعات طويلة من الجلوس المريح."
        },
        "15": {
          "title": "JBL Boombox 2",
          "type": "إلكترونيات",
          "details": "استمتع بصوت قوي مع JBL Boombox 2، الذي يتميز بتصميم قوي وعمر بطارية طويل."
        },
        "16": {
          "title": "عطر شرقي فاخر",
          "type": "عطور",
          "details": "مزيج رائع من العود والورد واللبان، مما يخلق رائحة غنية وفاخرة تدوم طوال اليوم."
        },
        "17": {
          "title": "هاتف ذكي متطور",
          "type": "إلكترونيات",
          "details": "يتميز بشاشة كبيرة، معالج قوي، وعمر بطارية طويل، مثالي للعمل والترفيه."
        },
        "18": {
          "title": "بلاي ستيشن 5",
          "type": "ألعاب",
          "details": "النسخة السوداء والبيضاء من PS5 متوفرة الآن للشراء والاستمتاع بأحدث الألعاب."
        },
        "19": {
          "title": "سماعات لاسلكية",
          "type": "إلكترونيات",
          "details": "جودة صوت مذهلة مع سماعة لاسلكية من أمازون، توفر تجربة استماع متميزة."
        },
        "20": {
          "title": "مجموعات أزياء نسائية",
          "type": "ملابس",
          "details": "مجموعات نسائية عصرية تمنحك إطلالة رائعة، يمكنك العثور على أفضل التصاميم هنا."
        },
        "21": {
          "title": "أحذية كرة القدم الاحترافية",
          "type": "ملابس رياضية",
          "details": "أفضل أحذية كرة القدم للعبتك، يمكنك العثور على التصاميم المناسبة لك هنا."
        }
      },

      categories: {
        jackets: "السترات",
        coats: "المعاطف",
        shirts: "القمصان",
        casualWear: "الملابس الكاجوال",
        formalWear: "الملابس الرسمية",
      },
      services: {
        0: {
          value: "توصيل مجاني وسريع",
          description: "توصيل مجاني لجميع الطلبات التي تزيد عن 140 دولارًا",
        },
        1: {
          value: "خدمة عملاء على مدار الساعة",
          description: "دعم عملاء ودود على مدار الساعة",
        },
        2: {
          value: "ضمان استعادة الأموال",
          description: "نعيد الأموال خلال 30 يومًا",
        },
      },
      redButtons: {
        viewAllProducts: "عرض جميع المنتجات",
        viewAll: "عرض الكل",
        exploreByCategory: "استكشاف حسب الفئة",
        buyNow: "اشتر الآن",
        sendMassage: "إرسال رسالة",
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
        applyCoupon: "تطبيق القسيمة",
        processToCheckout: "الانتقال إلى الخروج",
        placeOrder: "تقديم الطلب",
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        chooseByCategory: "اختيار حسب الفئة",
      },
      whiteButtons: {
        backToHomePage: "العودة إلى الصفحة الرئيسية",
        loadMore: "تحميل المزيد..",
        moveAllToBag: "وضع الكل في السلة",
        seeAll: "عرض الكل",
        returnToShop: "العودة للتسوق",
        updateCart: "تحديث السلة",
      },
      wishlist: {
        title: "قائمة الرغبات",
        justForYou: "فقط لك",
      },
      cart: {
        header: {
          product: "المنتج",
          price: "السعر",
          quantity: "الكمية",
          subtotal: "المجموع الفرعي",
        },
        cartTotal: "المجموع الكلي للسلة",
        total: "الإجمالي",
        subtotal: "المجموع الفرعي",
        shipping: "الشحن",
        free: "مجانًا",
      },
      checkOut: {
        title: "الدفع",
        billingDetails: "تفاصيل الفواتير",
        firstName: "الاسم الأول",
        company: "الشركة",
        Country: "البلد",
        address: "العنوان",
        city: "المدينة",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        apartment: "الشقة، الطابق الخ (اختياري)",
        methods: "طرق الدفع",
        bank: "بنك (فيزا)",
        cash: "الدفع عند الاستلام",
        couponCode: "رمز القسيمة",
      },
      payment: {
        payment: "تفاصيل الدفع",
        number: "رقم البطاقة",
        enter: "أدخل رقم بطاقتك",
        expirationDate: "تاريخ انتهاء الصلاحية",
      },
      productPage: {
        relatedItems: "العناصر ذات الصلة",
        colors: "الألوان",
        size: "الحجم",
        inStock: "متوفر",
        reviews: "تقييم",
        review: "تقييم",
        1: "التوصيل المجاني",
        1.1: "أدخل الرمز البريدي الخاص بك للتحقق من توفر التسليم",
        2: "الإرجاع",
        2.1: "تفاصيل الإرجاع المجاني لمدة 30 يومًا",
      },
      contactPage: {
        call: "اتصل بنا",
        available: "نحن متاحون على مدار الساعة طوال أيام الأسبوع.",
        phone: "الهاتف",
        write: "اكتب لنا",
        fillForm: "املأ نموذجنا وسنتصل بك في غضون 24 ساعة.",
        emails: "البريد الإلكتروني",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourPhone: "رقم هاتفك",
        yourMessage: "رسالتك",
      },
      aboutPage: {
        title: "من نحن",
        story: "قصتنا",
        paragraph1:
          "بدأت Exclusive في عام 2015، وهي السوق الرائدة للتسوق عبر الإنترنت في جنوب آسيا بوجود نشط في بنغلاديش. مدعومة بمجموعة واسعة من حلول التسويق والبيانات والخدمات المخصصة، يضم Exclusive 10،500 بائع و 300 علامة تجارية ويخدم 3 ملايين عميل في المنطقة.",
        paragraph2:
          "يقدم Exclusive أكثر من مليون منتج، وهو ينمو بسرعة كبيرة. يقدم Exclusive مجموعة متنوعة من الفئات التي تتراوح من المستهلك.",
        card1: "البائعين نشطون على موقعنا",
        card2: "مبيعات المنتجات الشهرية",
        card3: "العملاء نشطون على موقعنا",
        card4: "الإيرادات الإجمالية السنوية على موقعنا",
        k1: "10.5k",
        k2: "33k",
        k3: "45.5k",
        k4: "25k",
        name1: "توم كروز",
        name2: "توم هانكس",
        name3: "ويل سميث",
        name4: "توم هاردي",
        job1: "مؤسس ورئيس",
        job2: "المدير التنفيذي للتكنولوجيا",
        job3: "الرئيس التنفيذي",
        job4: "مصمم المنتج",
      },
      accountPage: {
        setMassage: "تم تحديث تفاصيل الحساب بنجاح!",
        welcome: "مرحبًا! ",
        home: "الصفحة الرئيسية",
        myAccount: "حسابي",
        ManageMyAccount: "إدارة حسابي",
        myProfile: "ملفي",
        addressBook: "دليل العناوين",
        myPaymentOptions: "خيارات الدفع الخاصة بي",
        myOrders: "طلباتي",
        myReturns: "إرجاعاتي",
        myCancelations: "إلغاءاتي",
        myWishlist: "قائمة الرغبات",
        editYourProfile: "تحرير ملفك الشخصي",
        firstName: "الاسم الأول",
        yourFirstName: "اسمك الأول",
        lastName: "الاسم الأخير",
        yourLastName: "اسمك الأخير",
        email: "البريد الإلكتروني",
        yourEmail: "بريدك الإلكتروني",
        address: "العنوان",
        yourAddress: "عنوانك",
        passwordChanges: "تغيير كلمة المرور",
        currentPassword: "كلمة المرور الحالية",
        newPassword: "كلمة المرور الجديدة",
        confirmPassword: "تأكيد كلمة المرور",
        cancel: "إلغاء",
        saveChanges: "حفظ التغييرات",
      },

      signUpPage: {
        title: "إنشاء حساب",
        enter: "أدخل بياناتك أدناه:",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        createAccount: "إنشاء حساب",
        withGoogle: "تسجيل الدخول بواسطة جوجل",
        haveAccount: "هل لديك حساب بالفعل؟",
        login: "تسجيل الدخول",
      },
      loginPage: {
        title: "تسجيل الدخول إلى Exclusive",
        enter: "أدخل بياناتك أدناه:",
        emailOrPhone: "البريد الإلكتروني أو رقم الهاتف",
        password: "كلمة المرور",
        forgot: "نسيت كلمة المرور؟",
        notHaveAccount: "ليس لديك حساب بعد؟",
        login: "تسجيل الدخول",
      },

      Snackbar: {
        inCart: "العناصر موجود بالفعل في السلة!",
        movedToCart: "تم نقل العناصر بنجاح إلى السلة!",
        noItems: "لا توجد عناصر لنقلها إلى السلة!",
      },

      category: {
        redTitle: "الفئات",
        title: "تصفح حسب الفئة",
        categories: {
          0: "السترات",
          1: "المعاطف",
          2: "القمصان",
          3: "الملابس الكاجوال",
          4: "الملابس الرسمية",
          5: "الإكسسوارات",
        },
      },
      bestSelling: {
        redTitle: "هذا الشهر",
        title: "أفضل المنتجات المباعة",
      },
      deal: {
        greenTitle: "الفئات",
        title: "تعزيز تجربة الاستماع الخاصة بك",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        buyNow: "اشتر الآن!",
      },
      allProducts: {
        redTitle: "منتجاتنا",
        title: "استكشف منتجاتنا",
        byCategory: "استكشف حسب الفئة",
      },
      featured: {
        redTitle: "متميز",
        title: "وصول جديد",
        shopNow: "تسوق الآن",
        playStation: {
          title: "بلاي ستيشن 5",
          description: "النسخة السوداء والبيضاء من PS5 تصدر للبيع.",
        },
        WomenCollections: {
          title: "مجموعات النساء",
          description: "مجموعات نسائية مميزة تمنحك جوًا آخر.",
        },
        speakers: {
          title: "مكبرات الصوت",
          description: "مكبرات صوت لاسلكية من Amazon",
        },
        perfume: {
          title: "عطر",
          description: "GUCCI INTENSE OUD EDP",
        },
      },
      footer: {
        subscribe: "اشترك",
        offer: "احصل على خصم 10% على طلبك الأول",
        enterEmail: "أدخل بريدك الإلكتروني",
        enterPassword: "أدخل كلمة المرور",
        account: "الحساب",
        myAccount: "حسابي",
        sign: "تسجيل الدخول / التسجيل",
        cart: "عربة التسوق",
        wishlist: "قائمة الرغبات",
        shop: "متجر",
        downloadApp: "تحميل التطبيق",
        save: "وفر 3 دولارات مع تطبيق جديد للمستخدمين فقط",
        support: "الدعم",
        address: "جولبرج بيزنس بلازا، مكتب رقم 8، الطابق الأول، سيفيك سنتر، جولبرج جرينز، إسلام آباد، روالبندي، البنجاب، باكستان 00666",
        quickLinks: "روابط سريعة",
        privacy: "سياسة الخصوصية",
        usage: "شروط الاستخدام",
        FAQ: "الأسئلة الشائعة",
        Contact: "اتصل بنا",
        copyrights: "© حقوق الطبع والنشر Rimel 2025. كل الحقوق محفوظة",
        allRightsReserved: "© كل الحقوق محفوظة",
      },
    },
  },
};

// Initialize i18n
i18n.use(initReactI18next).init({
  lng: defaultLang,
  resources,
  keySeparator: ".",
  interpolation: { escapeValue: false },
});

export default i18n;
