import React from "react";

function Band() {
    return (
        <>
        <div className="band">
            <div class="container text-center">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div class="col">
                    <div className="features">
                        <div className="circle">
                            <img src="/../../images/creative.png" alt="" />
                        </div>
                        <p>Creative Design</p>
                    </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src="/../../images/font-size.png" alt="" />
                            </div>
                            <p>Various Fonts</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src="/../../images/time-left.png" alt="" />
                            </div>
                            <p>Time-saving</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src="/../../images/easy-to-use.png" alt="" />
                            </div>
                            <p>Easy to use</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Band;