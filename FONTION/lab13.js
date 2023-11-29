let name = 'John';
function sayHi() {
 console.log('Hi, ' + name);
}
name = 'Jathupol';
sayHi(); // *จะแสดงผลเป็น "Hi, Pete" นั่นเพราะ name ถูกเปลี่ยนค่าจาก "John" เป็น "Pete" 
            // ก่อนที่ฟังก์ชัน sayHi() จะถูกเรียกครั้งแรกและ sayHi() จะอ้างถึง name ที่อยู่ใน Global Scope 
                // ซึ่งได้ถูกเปลี่ยนค่าไปเป็น "Pete" แล้วตราบใดที่เกิดการเรียก sayHi() จะแสดงค่าของ name ที่มีอยู่ใน Global Scope ในขณะนั้น
