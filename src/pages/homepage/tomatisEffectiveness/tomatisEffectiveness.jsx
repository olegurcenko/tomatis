import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const categories = [
  { category: "Речевые и поведенческие нарушения", issues: "Трудности в обучении", group: "Взрослые" },
  { category: "Задержка речевого развития", issues: "Дислексия", group: "Депрессия" },
  { category: "Детский аутизм (PAC)", issues: "Дисграфия", group: "Послеродовая депрессия" },
  { category: "Задержка психомоторного развития", issues: "Дискалькулия", group: "Эмоциональное выгорание" },
  { category: "Нарушения Сенсорной интеграции", issues: "Дефицит внимания", group: "Психоэмоциональные травмы" },
  { category: "Нарушения коммуникации", issues: "Трудности изучения иностранных языков", group: "Постинсультные состояния" },
  { category: "Органические/генетические нарушения", issues: "Нарушение графомоторных функций", group: "" },
  { category: "Синдром дефицита внимания и гиперактивности (СДВГ)", issues: "", group: "" },
  { category: "Синдром Аспергера", issues: "", group: "" },
  { category: "Заикание", issues: "", group: "" },
];

export const TomatisEffectiveness = () => {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "1200px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          borderRadius: "16px",
          overflow: "hidden",
        }}
      >
        <CardContent>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#007f6a",
              mb: 4,
            }}
          >
            Эффективность Стимуляции по методу ТОМАТИСа
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              textAlign: "justify",
              lineHeight: 1.8,
            }}
          >
            Стимуляция мозга по методу ТОМАТИСа показала высокий уровень
            эффективности и результативности в работе с такими категориями
            людей:
          </Typography>

          {/* Table */}
          <TableContainer component={Paper} sx={{ boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
            <Table sx={{ minWidth: 650 }} aria-label="Effectiveness Table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "#007f6a" }}>Категория</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#007f6a" }}>Трудности / Проблемы</TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "#007f6a" }}>Группа</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f9fbe7" },
                      "&:hover": { backgroundColor: "#e8f5e9" },
                    }}
                  >
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.issues || "—"}</TableCell>
                    <TableCell>{row.group || "—"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};