const menu_data = [
  {
    id:1,
    mega_menu:false,
    has_dropdown:false,
    title:'Home',
    link:'/',
    
  },
  {
    id:2,
    mega_menu:false,
    has_dropdown:true,
    title:'Students',
    link:'/portfolio-masonry',
    sub_menus:[
      {link:'/portfolio-details',title:'Student Journey'},
      {link:'/portfolio-details',title:'Top Partner Universities'},
      {link:'/portfolio-details',title:'Branches'},
      {link:'/portfolio-details',title:'Course Finder'},
    ]
  },
  {
    id:3,
    mega_menu:false,
    has_dropdown:false,
    title:'Recruitment Partners',
    link:'/service-details',
    
  },
  {
    id:4,
    mega_menu:false,
    has_dropdown:false,
    title:'Partnered Universities',
    link:'/service-details',
    
  },
  /*
  {
    id:0,
    mega_menu:true,
    has_dropdown:true,
    title:'Pages',
    link:'#',
    sub_menus:[
      {link:'/about',title:'About'},
      {link:'/about-me',title:'About Me'},
      {link:'/job',title:'Job'},
      {link:'/job-details',title:'Job Details'},
      {link:'/product',title:'Product'},
      {link:'/product-details',title:'Product Details'},
      {link:'/service-1',title:'Service 01'},
      {link:'/service-2',title:'Service 02'},
      {link:'/service-3',title:'Service 03'},
      {link:'/service-4',title:'Service 04'},
      {link:'/service-details',title:'Service Details'},
      {link:'/testimonial',title:'Testimonial'},
      {link:'/price',title:'Price'},
      {link:'/faq',title:'Faq'},
      {link:'/login',title:'Login'},
      {link:'/register',title:'Register'},
      {link:'/cart',title:'Cart'},
      {link:'/wishlist',title:'Wishlist'},
      {link:'/checkout',title:'Checkout'},
      {link:'/404',title:'404'},
    ]
  },
  

  {
    id:5,
    mega_menu:false,
    has_dropdown:true,
    title:'Blog',
    link:'/blog',
    sub_menus:[
      {link:'/blog',title:'Blog Sidebar'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },

  */
  {
    id:5,
    mega_menu:false,
    has_dropdown:true,
    title:'About',
    link:'/about',
    sub_menus:[
      {link:'/about',title:'Our Story'},
      {link:'/job',title:'Careers'},
      {link:'/service-2',title:'Franchise'},
      {link:'/service-4',title:'Partner with us'},
    ]
    
  },
  {
    id:6,
    mega_menu:false,
    has_dropdown:false,
    title:'Contact',
    link:'/contact',
  }
]
export default menu_data;

