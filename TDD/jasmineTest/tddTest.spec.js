describe('자스민 테스트 묶음입니다.', () => {
    // it 함수 : 함수 테스트 유닛입니다.    
    it('인자를 전달하면 1을 더해주는 함수입니다.',() => {
        let num = Math.random()
        
        expect(plusOne(num).toBe(num+1))
    })
})