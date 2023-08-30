import{I as k,_ as Y,b as _,r as V,N as Z,C as ee,y as ae,d as s,o as h,s as w,w as o,f as a,g as t,i as U,k as z,K as C,e as te,A as j,L as f}from"./index-cc972ea5.js";const le=(i,d)=>k({method:"get",url:`/admin/product/baseTrademark/${i}/${d}`}),oe=i=>i.id?k({method:"put",url:"/admin/product/baseTrademark/update",data:i}):k({method:"post",url:"/admin/product/baseTrademark/save",data:i}),re=i=>k({method:"delete",url:`/admin/product/baseTrademark/remove/${i}`});const se=["src"],ne=["src"],de={class:"dialog-footer"},ue={name:"tradeMark"},ie=Object.assign(ue,{setup(i){let d=_(1),m=_(3),N=_(3),p=_([]),c=_(!1),n=V({id:0,tmName:"",logoUrl:""}),v=_(),x=Z(()=>n.id==0?"添加品牌":"修改品牌"),y=async()=>{let e=await le(d.value,m.value);e.code==200&&(N.value=e.data.total,p.value=e.data.records,p.value[0].tmName=="小米"&&(p.value[0].logoUrl="http://"+p.value[0].logoUrl))};ee(()=>{y()}),ae([d,m],(e,l)=>{e[1]!=l[1]&&(d.value=1),y()});let O=e=>{j(()=>{v.value.clearValidate()}),e()},A=()=>{c.value=!1,j(()=>{v.value.clearValidate()})},B=async()=>{try{await v.value.validate(),(await oe(n)).code==200?f({type:"success",message:x.value+"成功"}):f({type:"error",message:x.value+"失败"}),c.value=!1,y()}catch{}},L=()=>{c.value=!0,n.id=0,n.tmName="",n.logoUrl=""},S=e=>{c.value=!0,Object.assign(n,e)},$=e=>{if(console.log(e),e.type=="image/jpeg"||e.type=="image/gif"||e.type=="image/png"){if(e.size/1024/1024>4)return f({message:"上传文件大小需要小于4M",type:"error"}),!1}else return f({message:"上传文件格式必须为jpg|gif|png",type:"error"}),!1;return!0},q=(e,l)=>{n.logoUrl=e.data};const E=V({tmName:[{required:!0,trigger:"blur",validator:(e,l,u)=>{/^.{2,}$/.test(l.trim())?u():u(new Error("长度小于2"))}}],logoUrl:[{required:!0,validator:(e,l,u)=>{l?u():u(new Error("图片不能为空"))}}]});let I=async e=>{let l=await re(e);l.code==200?(f({type:"success",message:"删除成功"}),y(),p.value.length<=1&&(d.value-=1)):f({type:"error",message:"删除失败，"+l.data})};return(e,l)=>{const u=s("SvgIcon"),g=s("el-button"),b=s("el-table-column"),M=s("el-popconfirm"),G=s("el-table"),P=s("el-pagination"),K=s("el-input"),T=s("el-form-item"),R=s("el-icon"),D=s("el-upload"),F=s("el-form"),H=s("el-dialog"),J=s("el-card");return h(),w(J,{class:"box-card"},{default:o(()=>[a(g,{type:"primary",onClick:t(L)},{default:o(()=>[a(u,{class:"svg",name:"add"}),U(" 品牌管理 ")]),_:1},8,["onClick"]),a(G,{border:!0,data:t(p)},{default:o(()=>[a(b,{label:"序号",width:"100",align:"center",type:"index"}),a(b,{label:"品牌名称",prop:"tmName"}),a(b,{label:"品牌LOGO"},{default:o(({row:r,column:Q,$index:W})=>[z("img",{src:r.logoUrl,alt:"资源有误"},null,8,se)]),_:1}),a(b,{label:"操作"},{default:o(({row:r,column:Q,$index:W})=>[a(g,{type:"primary",onClick:X=>t(S)(r)},{default:o(()=>[a(u,{class:"svg no_margin",name:"bianji"})]),_:2},1032,["onClick"]),a(M,{title:"确定删除吗？",width:"200",onConfirm:X=>t(I)(r.id)},{reference:o(()=>[a(g,{type:"primary"},{default:o(()=>[a(u,{class:"svg no_margin",name:"shanchu"})]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"]),a(P,{"current-page":t(d),"onUpdate:currentPage":l[0]||(l[0]=r=>C(d)?d.value=r:d=r),"page-size":t(m),"onUpdate:pageSize":l[1]||(l[1]=r=>C(m)?m.value=r:m=r),"page-sizes":[3,5,9,10],background:!0,layout:"prev, pager, next,jumper,->, sizes,total",total:t(N)},null,8,["current-page","page-size","total"]),a(H,{modelValue:t(c),"onUpdate:modelValue":l[3]||(l[3]=r=>C(c)?c.value=r:c=r),title:t(x),"before-close":t(O),width:"50%"},{footer:o(()=>[z("span",de,[a(g,{onClick:t(A)},{default:o(()=>[U(" 取消 ")]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:t(B)},{default:o(()=>[U(" 确定 ")]),_:1},8,["onClick"])])]),default:o(()=>[a(F,{"label-width":"120px",model:t(n),rules:E,style:{width:"80%"},ref_key:"tradeForm",ref:v},{default:o(()=>[a(T,{label:"品牌名称：",prop:"tmName"},{default:o(()=>[a(K,{placeholder:"请输入品牌名称",modelValue:t(n).tmName,"onUpdate:modelValue":l[2]||(l[2]=r=>t(n).tmName=r)},null,8,["modelValue"])]),_:1}),a(T,{label:"品牌LOGO：",prop:"logoUrl"},{default:o(()=>[a(D,{class:"avatar-uploader",action:"http://sph-api.atguigu.cn/admin/product/fileUpload","show-file-list":!1,"on-success":t(q),"before-upload":t($)},{default:o(()=>[t(n).logoUrl?(h(),te("img",{key:0,src:t(n).logoUrl,class:"avatar"},null,8,ne)):(h(),w(R,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[a(u,{name:"add"})]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title","before-close"])]),_:1})}}}),_e=Y(ie,[["__scopeId","data-v-88000f8f"]]);export{_e as default};
