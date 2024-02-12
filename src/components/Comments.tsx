import { useEffect, useState } from "react";
import { Datagrid, List, TextField } from "react-admin";

export const CommentsList = () => {
    const [postId, setPostId] = useState('');

    useEffect(() => {
        const postIdFromStorage = localStorage.getItem('postId');
        console.log(postIdFromStorage);
        setPostId(postIdFromStorage);
    }, []);

    if (!postId) {
        return <p>Cargando comentarios...</p>;
    }

    return postId ? (
        <List filter={{ posts_id: postId }}>
            <Datagrid>
                <TextField source="comment" />
            </Datagrid>
        </List>
    ) : null;

};
