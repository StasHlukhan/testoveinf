import React from 'react'
import MyInput from '../UI/Input/MyInput'
import MySelect from '../UI/select/MySelect'

interface Filter {
  query: string;
  sort: string;
}

interface PostFilterProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Filter"
        options={[
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
