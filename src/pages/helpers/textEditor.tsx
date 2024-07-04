import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

interface ArticleProps {
  content: string;
}

export const TextEditor: React.FC<ArticleProps> = ({ content }) => {
  const parseContent = (text: string) => {
    const sections = text.split('\n\n'); // Split by double newlines for paragraphs
    return sections.map(section => {
      const lines = section.split('\n'); // Split by single newlines for lines within a section
      const isBulletPoint = lines.some(line => line.trim().startsWith('•'));
      return { isBulletPoint, lines };
    });
  };

  const parsedContent = parseContent(content);

  return (
    <Box sx={{maxWidth: 900, width: '90%', margin: '0, auto', marginInline: 'auto'}}>
      {parsedContent.map((paragraph, index) => (
        <Box key={index} mb={2}>
          {paragraph.isBulletPoint ? (
            <List>
              {paragraph.lines.map((line, i) => (
                <ListItem key={i} sx={{ display: 'list-item', listStyleType: 'disc', pl: 2 }}>
                  <ListItemText primary={line.replace('•', '').trim()} />
                </ListItem>
              ))}
            </List>
          ) : (
            paragraph.lines.map((line, i) => (
              <Typography key={i} paragraph>
                {line.trim()}
              </Typography>
            ))
          )}
        </Box>
      ))}
    </Box>
  );
};
