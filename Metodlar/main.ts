// types-from-types.ts

// 1. Asosiy type
type User = {
    id: number;
    name: string;
    email: string;
  };
  
  // 2. Partial<Type> - barcha propertylarni ixtiyoriy qiladi
  type PartialUser = Partial<User>;
  
  // 3. Required<Type> - barcha propertylarni majburiy qiladi
  type RequiredUser = Required<PartialUser>;
  
  // 4. Readonly<Type> - barcha propertylarni readonly qiladi
  type ReadonlyUser = Readonly<User>;
  
  // 5. Pick<Type, Keys> - faqat kerakli propertylarni tanlab oladi
  type UserNameAndEmail = Pick<User, "name" | "email">;
  
  // 6. Omit<Type, Keys> - berilgan propertylarni chiqarib tashlaydi
  type UserWithoutEmail = Omit<User, "email">;
  
  // 7. Record<Keys, Type> - kalitlar asosida yangi obyekt type yaratadi
  type Role = "admin" | "user" | "guest";
  type RoleAccess = Record<Role, boolean>;
  
  // 8. Exclude<UnionType, ExcludedMembers> - Union’dan element chiqaradi
  type Status = "pending" | "approved" | "rejected";
  type ActiveStatus = Exclude<Status, "rejected">;
  
  // 9. Extract<UnionType, Members> - faqat kerakli elementlarni ajratadi
  type ApprovedStatus = Extract<Status, "approved" | "done">;
  
  // 10. ReturnType<Func> - funksiyaning return qiymati type’ini oladi
  function getUser() {
    return {
      id: 1,
      name: "Komol",
      email: "komol@example.com",
    };
  }
  type UserType = ReturnType<typeof getUser>;
  
  // 11. Parameters<Func> - funksiyaning argumentlarini type qiladi
  function createUser(id: number, name: string) {}
  type Params = Parameters<typeof createUser>;
  