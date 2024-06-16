import React from "react";
import creative from '../../assets/images/creative.png';
import font from '../../assets/images/font-size.png';
import time from '../../assets/images/time-left.png';
import ease from '../../assets/images/easy-to-use.png';

function Band() {
    return (
        <>
        <div className="band">
            <div class="container text-center">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div class="col">
                    <div className="features">
                        <div className="circle">
                            <img src={creative} alt="" />
                        </div>
                        <p>Creative Design</p>
                    </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src={font} alt="" />
                            </div>
                            <p>Various Fonts</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src={time} alt="" />
                            </div>
                            <p>Time-saving</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className="features">
                            <div className="circle">
                                <img src={ease} alt="" />
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