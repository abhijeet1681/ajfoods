// const Footer = () => {
//     return <div className="text-center bg-success">This is Footer component</div>;
//   };

// // export default Footer

const Footer = () => {
  return(
      <>
         <div>
                
              <footer className="text-center text-lg-start text-white" style={{backgroundColor:"#1c2331"}}>
                  <section className="d-flex justify-content-between p-4 mt-3" style={{backgroundColor:"grey"}} >

                  <div class="me-5">
                  <span>Get connected with us on social networks:</span>
                      </div>

                      <div>
                              <a href="" class="text-white me-4">
                                   <i class="fab fa-facebook-f"></i>
                               </a>
                              <a href="" class="text-white me-4">
                                   <i class="fab fa-twitter"></i>
                               </a>
                               <a href="" class="text-white me-4">
                                    <i class="fab fa-google"></i>
                                </a>
                               <a href="" class="text-white me-4">
                                     <i class="fab fa-instagram"></i>
                                </a>
                               <a href="" class="text-white me-4">
                                     <i class="fab fa-linkedin"></i>
                                 </a>
                              <a href="" class="text-white me-4">
                                      <i class="fab fa-github"></i>
                                  </a>
                          </div>

                  </section>
                       
                   

              </footer>


         </div>
      </>
  );
};
export default Footer