import React from 'react';

function RowItemApp(props) {

    let {row,idx,onDelete} = props;

    //삭제이벤트
    const btnDelete=()=>{
        onDelete(idx); //부모가 props로 보낸 이벤트 호출
    }

    return (
        <tr>
            <td>{row.name}</td>
            <td><img src={`../image/${row.photo}.jpg`}
            style={{width:'50px',border:'1px solid gray', height:'60px'}}/></td>
            <td>{row.blood}형</td>
            <td>{row.today.toLocaleString('ko-kr')}</td>
            <td>
                <button type='button' className='btn btn-danger btn-sm'
                onClick={btnDelete}>삭제</button>
            </td>
        </tr>
    );
}

export default RowItemApp;