const Shimmer = () => {
    return new Array(20).fill(0).map(() => (
        <div className="custom-card">
          <div className="mb-3">
            <div className="shimmerImg"></div>
          </div>
          <div>
              <h5 className="shimmerLine mb-3 mt-2"></h5>
              <div className="d-flex mb-3 justify-content-between">
                <div className="abhi shimmerLine" style={{width:"50px"}}></div> 
                <div className="abhi shimmerLine" style={{width:"50px"}}></div>
                </div>
              <div className="text-secondary shimmerLine mb-3"></div>
              <p className="shimmerLine mb-2"></p>
          </div>
      </div>  
    
 )); 
};

export default Shimmer;