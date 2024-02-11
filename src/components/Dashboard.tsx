import { Link } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import { useGetList } from 'react-admin';

export const Dashboard = () => {
    const { data: posts, loading, error } = useGetList('posts', { pagination: { page: 1, perPage: 4 }, sort: { field: 'id', order: 'DESC' } });

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="card-title">Ultimos posts</span>
                            </div>
                            <div className="col-md-6 text-end">
                                <div className="btn-group">
                                    <Link to="/posts/create" className="btn btn-primary">Crear nuevo post</Link>
                                    <Link to="/posts" className="btn btn-outline-primary">Ver mis posts</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {loading && <CircularProgress />}
                        {error && <Typography variant="body1" color="error">Error al cargar los datos.</Typography>}
                        <div className="row">
                            <div className="col-md-5">
                                {posts && (
                                    <div>
                                        {posts.map(post => (
                                            <div className="card mb-3">
                                                <div className="card-header bg-dark text-white">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            {post.title}
                                                        </div>
                                                        <div className="col-md-6 text-end">
                                                            <div className="btn-group">
                                                                <Link to={`/posts/${post.id}/show`} className="btn btn-sm btn-outline-primary">Ver mas</Link>
                                                                <Link to={`/posts/${post.id}/show/1`} className="btn btn-sm btn-outline-success">Comentar</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.body }} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
