import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CircularProgress, Typography } from '@mui/material';
import { useGetList } from 'react-admin';

export const Dashboard = () => {
    const { data: posts, loading, error } = useGetList('posts', { pagination: { page: 1, perPage: 4 }, sort: { field: 'id', order: 'DESC' } });

    return (
        <div className="row">
            <div className="col-md-12">
                <Card className="card">
                    <CardHeader className="bg-dark text-white" title="Bienvenido!" />
                    <CardContent className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <Typography variant="h5" gutterBottom>Últimos Posts</Typography>
                            </div>
                            <div className="col-md-6 text-end">
                                <div className="btn-group">
                                    <Link to="/posts/create" className="btn btn-primary">Crear nuevo post</Link>
                                    <Link to="/posts" className="btn btn-outline-primary">Ver mis posts</Link>
                                </div>
                            </div>
                        </div>
                        {loading && <CircularProgress />}
                        {error && <Typography variant="body1" color="error">Error al cargar los datos.</Typography>}
                        <div className="row">
                            <div className="col-md-5">
                                {posts && (
                                    <div>
                                        {posts.map(post => (
                                            <Card key={post.id} className="card mb-3">
                                                <CardHeader className="bg-primary text-white" title={post.title} />
                                                <CardContent className="card-body">
                                                    <Typography variant="body1" dangerouslySetInnerHTML={{ __html: post.body }} />
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
