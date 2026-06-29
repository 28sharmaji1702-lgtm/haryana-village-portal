import fs from "fs";
import path from "path";
import tehsils from "./src/data/tehsils.js";

const villagesDir = path.join(process.cwd(), "src", "data", "villages");

// Create villages folder if it doesn't exist
if (!fs.existsSync(villagesDir)) {
  fs.mkdirSync(villagesDir, { recursive: true });
}

tehsils.forEach((tehsil) => {
  const fileName = `${tehsil.id}.js`;
  const filePath = path.join(villagesDir, fileName);

  // Skip existing files
  if (fs.existsSync(filePath)) {
    console.log(`✔ Exists: ${fileName}`);
    return;
  }

  const content = `const villages = [];

export default villages;
`;

  fs.writeFileSync(filePath, content, "utf8");

  console.log(`✅ Created: ${fileName}`);
});

console.log("\n🎉 All village files are ready.");