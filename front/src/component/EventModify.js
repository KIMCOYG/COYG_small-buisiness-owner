import logo from "../static/image/chicken.jpg";
import {Link} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import React from "react";
import styled from "styled-components";
import {Col, Form} from "react-bootstrap";

const MinDiv = styled.div`
  font-size: 0.5rem;
`;

const EventShowAll = ({history, lists}) => {
    return (

        lists.map(e => (
            <Form onSubmit={handleSubmit} id="registEvent">
                <Form.Group controlId="formShopName">
                    <Form.Label>가게명</Form.Label>
                    <Form.Control type="input" defaultValue={e.shopName} disabled></Form.Control>
                </Form.Group>

                <Form.Group controlId="formEventName">
                    <Form.Label>이벤트명</Form.Label>
                    <Form.Control type="input" defaultValue={e.eventName}></Form.Control>
                </Form.Group>

                <Form.Label>이벤트 기간</Form.Label>
                <Form.Row className="align-items-center">
                    {/*TODO: 2021.04.18 date의 format에 따라서 값 불러오기. 실패시 react-datePicker 사용 -sunbo*/}
                    <Form.Group as={Col} controlId="formEventStart" value={e.startTerm}>
                        <Form.Label>시작일</Form.Label>
                        <Form.Control type="date" value="2021-04-03"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formEventEnd" value={e.endTerm}>
                        <Form.Label>종료일</Form.Label>
                        <Form.Control type="date" value="2021-04-09"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formEventDetail">
                    <Form.Label>이벤트 내용</Form.Label>
                    <Form.Control as="textarea" rows={4} value={e.event_content}/>
                </Form.Group>

                <Form.Group controlId="formEventDetail">
                    <Form.File id="formFile" label="사진첨부"/>
                </Form.Group>
                {/*<Button type="submit">등록</Button>*/}
            </Form>
            )
        )
    )
}

export default EventShowAll;