import styled from "styled-components";
import { EditFilled } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styles from "./group_create.module.less";
import List from "@components/list/MemberList";
import React from "react";
import Uploader from "@components/input/Uploader";
import TagInput from "@components/input/TagInput";
import useInputs from "@hooks/useInput";
import ModalCancle from "@components/modal/ModalCancel";
const GroupEdit = () => {
    const [form, onChange, reset] = useInputs({
        title:"",
        leaderName:"",
        crewName:"",
        startDate:"",
        content:"",
        groupTag:[]
    });
    return (
        <Container id="content">
            <Row>
                <Col span={6}>
                    <Uploader className={styles.upload}></Uploader>
                </Col>
                <Col span={18}>
                    <Form.Item>
                        <Input
                            name="title"
                            value={form.title}
                            onChange={onChange}
                            className={styles.title_input}
                            type="search"
                            suffix={<EditFilled />}
                            placeholder="크루명 입력"
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        style={{ padding: "0 .5rem", overflowY: "auto" }}
                    >
                        <TagInput name="groupTag"
                            title={"groupTag"}
                            value={form.groupTag}
                            onChange={onChange}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            name="content"
                            value={form.content}
                            onChange={onChange}
                            placeholder="그룹을 소개 해주세요"
                            className={styles.text_area}
                            autoSize={{ minRows: 6, maxRows: 6 }}
                        ></TextArea>
                    </Form.Item>
                </Col>
            </Row>
            <Divider></Divider>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <StyledTitle>호칭 설정</StyledTitle>
                </Col>
                <Col span={11}>
                    <Input
                        name="leaderName"
                        value={form.leaderName}
                        onChange={onChange}
                        type="text"
                        placeholder="크루장"
                        className={styles.input_border}
                    ></Input>
                </Col>
                <Col span={11} offset={2}>
                    <Input
                        name="crewName"
                        value={form.crewName}
                        onChange={onChange}
                        type="text"
                        placeholder="크루원"
                        className={styles.input_border}
                    ></Input>
                </Col>
            </Row>
            <Row
                justify="center"
                className={styles.button_group}
                style={{ top: "250px" }}
            >
                <Button type="primary">수정</Button>
                <Button type="default" onClick={()=>{ModalCancle(reset)}}>취소</Button>
            </Row>
        </Container>
    );
};

export default React.memo(GroupEdit);
const Container = styled.div``;
const StyledTitle = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.black};
`;
