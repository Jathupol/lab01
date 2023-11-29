function getLongText() {
    return
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}
console.log(getLongText()); // *จะเป็น undefined เนื่องจากมีการขึ้นบรรทัดใหม่ (return แยกจากคำพูดที่ต้องการจะส่งคืน) ทำให้ JavaScript ตีความว่าฟังก์ชัน getLongText สิ้นสุดทันทีหลังจาก return โดยไม่มีการส่งค่าไปยังผู้เรียกใช้งานฟังก์ชัน