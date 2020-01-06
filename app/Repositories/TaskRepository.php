<?php

namespace App\Repositories;

use App\Task;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TaskRepository implements TaskRepositoryInterface
{
    protected $model;

    /**
     * PostRepository constructor.
     *
     * @param Task $task
     */
    public function __construct(Task $task)
    {
        $this->model = $task;
    }

    public function all()
    {
        return $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id)
    {
        return $this->model->where('id', $id)
            ->update($data);
    }

    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    public function find($id)
    {
        if (null == $task = $this->model->find($id)) {
            throw new ModelNotFoundException("Post not found");
        }

        return $task;
    }
}
