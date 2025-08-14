import { Clock, Users, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Iniciante" | "Intermediário" | "Avançado";
  price: string;
  platform: string;
  category: string;
  rating?: number;
  students?: number;
  featured?: boolean;
}

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  platform,
  category,
  rating = 4.8,
  students = 1250,
  featured = false
}: CourseCardProps) => {
  const levelColors = {
    "Iniciante": "bg-success/10 text-success border-success/20",
    "Intermediário": "bg-warning/10 text-warning border-warning/20",
    "Avançado": "bg-destructive/10 text-destructive border-destructive/20"
  };

  return (
    <Card className={`group hover-lift shadow-card h-full ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {featured && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
              Destaque
            </Badge>
          )}
          <Badge className="absolute top-3 right-3 bg-card/90 text-card-foreground">
            {category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-1">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between">
            <Badge variant="outline" className={levelColors[level]}>
              {level}
            </Badge>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>{rating}</span>
              <span>({students})</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{platform}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="w-full space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
          </div>
          <Button className="w-full bg-gradient-primary hover:opacity-90 group-hover:shadow-glow transition-all">
            Acessar Curso
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;