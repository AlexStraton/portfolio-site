export default function Testing() {
    return <>
<section className=" bg-gray-200 border-2 border-green-300 m-8 md:m-18 lg:m-24 rounded-lg">
    <h1 className="m-4 text-3xl font-light">Other</h1>
    <div  className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center p-8" >
        <div className="flex flex-col items-center">
  <img alt="Figma logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Figma.png"/>
  <span className="m-4">Figma</span>
        </div>
         <div className="flex flex-col items-center">
 <img alt="Git logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Git.png"/>
  <span className="m-4">Git</span>
         </div>
   <div className="flex flex-col items-center">
  <img alt="GitHub logo"className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/GitHub.png"/>
  <span className="m-4">GitHub</span>
   </div>
   <div className="flex flex-col items-center">
   <img alt="NPM logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/NPM.png"/>
<span className="m-4">NPM</span>
   </div>
 <div className="flex flex-col items-center">
    <img alt="PyCharm logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/PyCharm.png"/>
<span className="m-4">PyCharm</span>
 </div>
 <div className="flex flex-col items-center">
     <img alt="VS Code logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/VSCode.png"/>
<span className="m-4">VS Code</span>
 </div>
    </div>
</section>
    </>
}
