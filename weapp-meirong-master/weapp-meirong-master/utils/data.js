/**
 * banner数据
 */ 
function getBannerData(){
    var arr = ['../../images/banner_01.png', '../../images/banner_02.png', '../../images/banner_03.png', '../../images/banner_04.png']
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                title:"推荐"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                title:"欧洲"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"加拿大"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"美国"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                        
                        subject:"Tamara Borojevic",
                        coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                        price:'3年',
                        message:'英语语言学硕士'
                    },
                    {
                        
                        subject:"无忧语伴",
                        coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                        price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                    {
                        
                        subject:"无忧语伴",
                        coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                        price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                    {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴'
                    },
                    {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                    {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    }
                ],
                [
                   {
                        
                    subject:"无忧语伴",
                    coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                    price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    }
                ],
                [
                  
                   {
                        artype:'beauty',
                        subject:"无忧语伴",
                        coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                        price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    }
                ],
                [
                    
                    {
                        
                    subject:"无忧语伴",
                    coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                    price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                    {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    }, {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                    {
                        
                      subject:"无忧语伴",
                      coverpath:"http://www.51yuban.cn/img/2_1.jpg",
                      price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴'
                    },
                ],
                [
                    {
                        artype:'eyelash',
                        subject:"无忧语伴 无忧语伴",
                        coverpath:"../../images/recommend_img_02.png",
                        price:'3年',
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴'
                    }
                ] 
            ]
    return arr
}
/**
 * 语伴 数据
 * */ 
function getSkilledData(){
    var arr = [
                {
        company:"无忧语伴",
                        avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'Tamara Borojevic',
                        message:'英语语言学硕士',
                        price:'3年'
                    },
                      /*{
                    company:"无忧语伴",
                      avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'邢欣',
                        
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴',
                        distance:'200m'
                    },
                    {
                      company:"无忧语伴",
                      avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'张露',
                        
                        
                        distance:'400m'
                    },
                    {
                      company:"无忧语伴",
                      avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'张磊',
                        
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴',
                        distance:'800m'
                    },
                     {
                       company:"无忧语伴",
                       avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'刘图雅',
                        
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴',
                        distance:'800m'
                    },
                     {
                       company:"无忧语伴",
                       avatar:"http://www.51yuban.cn/img/2_1.jpg",
                        nickname:'沙沙',
                        
                        message:'无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴无忧语伴',
                        distance:'800m'
                    }*/
            ]
    return arr
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'昊天',
            phone:'13812314563',
            province:'北京',
            city:'北京',
            addr:'朝阳区高碑店'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'昊天',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                        name:'昊天',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区高碑店'
                    }
                ]
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择省份','北京市'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','大兴区','朝阳区','海淀区','通州区','昌平区'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}
