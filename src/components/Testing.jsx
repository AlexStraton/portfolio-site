export default function Testing() {
    return <>
<section className=" bg-gray-200 border-2 border-red-300 m-8 md:m-18 lg:m-24 rounded-lg">
    <h1 className="m-4 text-3xl font-light">Testing</h1>
    <div  className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center p-8" >
        <div className="flex flex-col items-center">
       <img alt="pytest logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/pytest.png"/>
<span className="m-4">pytest</span>
 </div>
         <div className="flex flex-col items-center">
   <img alt="Jest logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Jest.png"/>
<span className="m-4">Jest</span>
   </div>
   <div className="flex flex-col items-center">
   <img alt="Mocha logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Mocha.png"/>
<span className="m-4">Mocha</span>
   </div>
    <div className="flex flex-col items-center">
   <img alt="Cypress logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Cypress.png"/>
<span className="m-4">Cypress</span>
   </div>
   <div className="flex flex-col items-center">
      <img alt="Postman logo" className="h-12 w-12 object-contain" src="src/assets/TechStackIcons/Postman.png"/>
<span className="m-4">Postman</span>
 </div>
    </div>
</section>
    </>
}
