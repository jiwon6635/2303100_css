import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import styled from 'styled-components';

import GetSearch from '../api/GetSearch';
import { SearchHeader } from '../components/header/SearchHeader'
import { NavBar } from '../components/common/NavBar';
import SearchProfile from '../components/common/SearchProfile';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODkwOTgwYjJjYjIwNTY2MzMzYjQyYSIsImV4cCI6MTY5MTk4NjMxOCwiaWF0IjoxNjg2ODAyMzE4fQ.QfSaENpQz1KpNArVe9p14KMiLMSJheS5URXCMfdjB_g';

export default function SearchPage() {
  // 검색창에 입력
  const [search, setSearch] = useState('')
  // 검색창에 뜨는 데이터 
  const [searchList, setSearchList] = useState([]) 
  // 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(false)

  // 입력값이 변경되었을 때 값을 추출해서 search에 저장
  const inputChange = (e)=>{
    const {value} = e.target
    setSearch(value)
  }
// GetSearch에 await걸어줌
// 아무것도 입력하지않아도 api에서 받아온게 뜨니까 return으로 입막
  const setResult = async () => {
    setSearchList(await GetSearch(search));
  }
// 여러번 동작 아무것도 입력하지 않았을때 아무것도 안뜨게 하기
  useEffect(() => {
    setIsLoading(true)
    if(search === '') {
      setIsLoading(false)
      return setSearchList([])
    }
    setResult()
    setIsLoading(false)
}, [search])

console.log(searchList) 
  return (
    <>
      <SearchPageStyle>
      <SearchHeader value={search} setValue={setSearch}></SearchHeader>
      <SearchResultWrapper>
        {isLoading ? <div>로딩중...</div> : (
          <>
          {searchList ? (
        <>
        {searchList.map((item, index) => {
        return (<li key={index}>
          <SearchProfile info={item}/>
        </li>)
      })}</>) : (
        <>
        <div>
          <h2>검색결과가 없습니다!</h2>
        </div>
        </>)}
        </>)}
      
      </SearchResultWrapper>
      <NavBar></NavBar>
      </SearchPageStyle>
    </>
  );
}

const SearchPageStyle = styled.div `
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: var(--backgroud-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const SearchResultWrapper = styled.ul `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
`