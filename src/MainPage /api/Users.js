// 로그인 실패 성공시 3가지 액션을 생성해주는 API 부분입니다.

import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import ERROR from './screen/ERROR';
import SUCCESS from './screen/SUCCESS';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setError(null);
                setUsers(null);
                setLoading(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            );
            setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };

        fetchUsers();
    }, [setLoading]);

    if (loading) return <SUCCESS/>;
    if (error) return <ERROR/>;
    if (!users) return null;
    return (
          <div>
              안녕
          </div>
    ) 
}

export default Users;