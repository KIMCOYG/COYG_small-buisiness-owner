import logo from "../static/image/chicken.jpg";
import {AiFillHeart} from "react-icons/ai";
import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";

import logo1 from '../static/image/upload/버거킹1621554310515.jpg'
import logo2 from '../static/image/upload/버거헌터 더위사냥.jpg'
import logo3 from '../static/image/upload/노브랜드버거이벤트.jpg'
import logo4 from '../static/image/upload/네파X버거보이.jpg'
import logo5 from '../static/image/upload/30주년 한정메뉴.jpg'
import logo6 from '../static/image/upload/굿바이보스버거.jpg'
import logo7 from '../static/image/upload/싸이버거 배달주문.jpg'
import logo8 from '../static/image/upload/와퍼주니어1900원.jpg'


const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const CategoryEventList = ({lists}) => {
    let history = useHistory();
    return (
        <div>
            <div className="row"
                 >
                <div className="col-4">
                    <img src={logo1} alt="" style={{width: '100px', height: '100px'}}/>
                </div>
                <div className="col-8">
                    <div className="font-weight-bold">
                        <h5>와퍼3500원</h5>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                            <MinDiv>2021.03.15 ~ 2021.03.28</MinDiv>
                            <MinDiv>2021.03.15</MinDiv>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <div className="d-flex">
                                <AiFillHeart className="text-danger mr-1"/>
                                <MinDiv>1232</MinDiv>
                            </div>
                            {/*거리계산*/}
                            <MinDiv>150m</MinDiv>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"
                 >
                <div className="col-4">
                    <img src={logo2} alt="" style={{width: '100px', height: '100px'}}/>
                </div>
                <div className="col-8">
                    <div className="font-weight-bold">
                        <h5>더위사냥은 버거헌터에서</h5>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                            <MinDiv>2021.03.29 ~ 2021.03.29</MinDiv>
                            <MinDiv>2021.03.29</MinDiv>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <div className="d-flex">
                                <AiFillHeart className="text-danger mr-1"/>
                                <MinDiv>757</MinDiv>
                            </div>
                            {/*거리계산*/}
                            <MinDiv>123m</MinDiv>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"
                 >
                <div className="col-4">
                    <img src={logo3} alt="" style={{width: '100px', height: '100px'}}/>
                </div>
                <div className="col-8">
                    <div className="font-weight-bold">
                        <h5>노브랜드 이벤트</h5>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                            <MinDiv>2021.03.19 ~ 2021.03.24</MinDiv>
                            <MinDiv>2021.03.19</MinDiv>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <div className="d-flex">
                                <AiFillHeart className="text-danger mr-1"/>
                                <MinDiv>755</MinDiv>
                            </div>
                            {/*거리계산*/}
                            <MinDiv>93m</MinDiv>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"
                 >
                <div className="col-4">
                    <img src={logo4} alt="" style={{width: '100px', height: '100px'}}/>
                </div>
                <div className="col-8">
                    <div className="font-weight-bold">
                        <h5>네파X버거보이</h5>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                            <MinDiv>2021.03.19 ~ 2021.03.19</MinDiv>
                            <MinDiv>2021.03.19</MinDiv>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <div className="d-flex">
                                <AiFillHeart className="text-danger mr-1"/>
                                <MinDiv>698</MinDiv>
                            </div>
                            {/*거리계산*/}
                            <MinDiv>51m</MinDiv>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"
                 >
                <div className="col-4">
                    <img src={logo6} alt="" style={{width: '100px', height: '100px'}}/>
                </div>
                <div className="col-8">
                    <div className="font-weight-bold">
                        <h5>굿바이 보스버거</h5>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex flex-column mr-5">
                            {/*<MinDiv>{e.shop.name}</MinDiv>*/}
                            <MinDiv>2021.03.21 ~ 2021.03.23</MinDiv>
                            <MinDiv>2021.03.21</MinDiv>
                        </div>
                        <div className="d-flex flex-column justify-content-end">
                            <div className="d-flex">
                                <AiFillHeart className="text-danger mr-1"/>
                                <MinDiv>658</MinDiv>
                            </div>
                            {/*거리계산*/}
                            <MinDiv>103m</MinDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryEventList;