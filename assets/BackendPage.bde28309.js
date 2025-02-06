import{Q as k}from"./QPage.b22661f9.js";import{S as m,U as i,Y as a,Z as n,a2 as s,f as r,$ as u,ab as c,V as y,a1 as h,W as b,F as f,ac as L}from"./index.6af422ac.js";import{s as t}from"./StackItem.4e790b36.js";import{_ as j}from"./ProjectCard.82b247e8.js";import"./render.652247f0.js";import"./position-engine.0f8c0ad8.js";import"./QIcon.a93da693.js";import"./use-size.d72b9aeb.js";import"./QBtn.316d4be8.js";import"./QSpinner.24ca14a5.js";import"./index.438ef9e6.js";const g=[{title:"backend.projectTitleElixirIdenticon",description:"backend.projectDescriptionElixirIdenticon",repositoryLink:"https://github.com/Fayhen/elixir-identicon",productionLink:null,stacks:[t.elixir]},{title:"backend.projectTitleQuickLorem",description:"backend.projectDescriptionQuickLorem",repositoryLink:"https://github.com/Fayhen/quick-lorem",productionLink:"https://www.npmjs.com/package/quick-lorem",stacks:[t.nodejs]},{title:"backend.projectTitleFastApiPagination",description:"backend.projectDescriptionFastApiPagination",repositoryLink:"https://github.com/Fayhen/fastapi-list-pagination",productionLink:null,stacks:[t.python]},{title:"backend.projectTitleNestjsNotificationService",description:"backend.projectDescriptionNestjsNotificationService",repositoryLink:"https://github.com/Fayhen/notification-service",productionLink:null,stacks:[t.nodejs,t.nestjs,t.typescript]},{title:"backend.projectTitlePythondex",description:"backend.projectDescriptionPythondex",repositoryLink:"https://github.com/Fayhen/Pythondex",productionLink:null,stacks:[t.python,t.sqlalchemy,t.flask]},{title:"backend.projectTitleMariadbSqlaDockerSetup",description:"backend.projectDescriptionMariadbSqlaDockerSetup",repositoryLink:"https://github.com/Fayhen/mariadb-sqla-docker-setup",productionLink:null,stacks:[t.docker,t.mysql,t.python,t.sqlalchemy]}],_={class:"q-page-inner-wrapper"},x={key:"text-backend-intro",style:{"animation-delay":"0.2s"}},$=m({__name:"BackendPage",setup(D){const p=g,l=.4;return(d,F)=>(i(),a(k,{class:"column items-center justify-evenly text-body1"},{default:n(()=>[s("div",_,[r(c,{appear:"",tag:"div",class:"backend-wrapper","enter-active-class":"animated fadeInUp"},{default:n(()=>[s("p",x,u(d.$t("backend.intro")),1)]),_:1}),r(c,{appear:"",tag:"div",class:"column items-center full-width","enter-active-class":"animated fadeInUp"},{default:n(()=>[(i(!0),y(f,null,h(b(p),(e,o)=>(i(),a(j,{key:e.title,title:e.title,description:e.description,repositoryLink:e.repositoryLink,productionLink:e.productionLink,iconsArray:e.stacks,index:o,class:"project-card",style:L(`animation-delay: ${l+.1*(o+1)}s;`)},null,8,["title","description","repositoryLink","productionLink","iconsArray","index","style"]))),128))]),_:1})])]),_:1}))}});export{$ as default};
