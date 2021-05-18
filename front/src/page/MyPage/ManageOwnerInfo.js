import React from 'react'
import {Button, Container, Form, Row} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Header from '../../component/HeaderOwner';
import userData from "../../dummy/dummyDataUser";
import UserInfoContainer from "../../container/UserInfoContainer";

const SecondHeader = ({history}) => {
    return (
        <Row>
            <button onClick={() => history.goBack()} type="button" className="btn btn-link border-dark">
              <BsChevronLeft className="text-dark" />
            </button>
            {/* <Button onClick={() => window.history.back()}>◁</Button> */}
            {/* <Button>등록</Button> */}
            <h4>내 정보 수정</h4>
        </Row>
    )
}

const ManageUserInfo = () => {
    const userInfo = userData[0]
    return (
        <>
            <Header/>
            <Container className="mt-3">
                <Row className="col-xs-2 pl-3 text-center">
                    <SecondHeader/>
                </Row>
                <UserInfoContainer/>
            </Container>
            <button onClick={() => history.push("owner/change-password")}></button>
        </>
    )
}

export default ManageUserInfo