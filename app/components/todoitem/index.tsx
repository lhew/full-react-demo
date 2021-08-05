import React, { FC, useRef } from 'react';
import { Task } from '../../types';
import { Button } from '../core/button';
import { Card } from '../core/card';
import { FormField } from '../core/formfield';
import { Input } from '../core/input';
import { TodoItemWrapper } from '../todocontainer';
import { SubmitContainer } from './style';
import { BiCheck, BiTrashAlt } from 'react-icons/bi';
import { useState } from 'react';

interface TodoItemProps extends Task {
  disabled?: boolean;
  loading?: boolean;
  withCancel?: boolean;
  className?: string;
  onEdit?(intendedState: boolean): void;
  onUpdate(payload: Partial<Exclude<Task, 'edit'>>): void;
  onDelete?(): void;
}

const TodoItem: FC<Partial<TodoItemProps>> = ({
  id,
  title,
  description,
  done,
  loading,
  className,
  edit,
  disabled,
  withCancel,
  onEdit = () => null,
  onUpdate = (payload: Partial<Task>) => null,
  onDelete = () => null,
}) => {
  const [formData, setFormData] = useState({ title, description });
  return (
    <form
      onSubmit={function (e) {
        e.preventDefault();

        const { title, description } = formData;
        setFormData({ title: '', description: '' });
        onUpdate({
          id,
          done: done || false,
          title,
          description,
        });

        (e.target as HTMLFormElement).reset();
      }}
    >
      <Card border className={className}>
        {!edit && (
          <TodoItemWrapper
            aria-label="todo-item"
            checked={done}
            disabled={disabled}
            onClick={() => {
              if (!done) onEdit(true);
            }}
          >
            {id && (
              <div>
                <Button
                  transparent
                  border
                  title="Mark as Done"
                  aria-label="button-done"
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdate({
                      id,
                      title,
                      description,
                      done: !done,
                    });
                  }}
                >
                  <BiCheck style={{ opacity: done ? '1' : '0.1' }} />
                </Button>
                <br />
                <Button
                  transparent
                  aria-label="button-delete"
                  border
                  title="Delete"
                >
                  <BiTrashAlt
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete();
                    }}
                  />
                </Button>
              </div>
            )}
            <div>
              <strong>{title}</strong>
              <br />
              <small>{description}</small>
            </div>
          </TodoItemWrapper>
        )}
        {edit && (
          <div>
            <FormField>
              <label>Title</label>
              <Input
                defaultValue={title}
                aria-label="title"
                onChange={(event) =>
                  setFormData({ ...formData, title: event.target.value })
                }
                type="text"
                required
                disabled={loading}
                name="title"
              />
            </FormField>
            <FormField>
              <label>Description</label>
              <Input
                defaultValue={description}
                onChange={(event) =>
                  setFormData({ ...formData, description: event.target.value })
                }
                type="text"
                required
                aria-label="description"
                disabled={loading}
                name="description"
              />
            </FormField>
            <SubmitContainer>
              <Button type="submit" aria-label="confirm" disabled={loading}>
                Confirm
              </Button>
              {withCancel && (
                <Button
                  mode="danger"
                  aria-label="cancel"
                  disabled={loading}
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit(false);
                  }}
                >
                  Cancel
                </Button>
              )}
            </SubmitContainer>
          </div>
        )}
      </Card>
    </form>
  );
};

export default TodoItem;
