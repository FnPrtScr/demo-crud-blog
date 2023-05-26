import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.postsService.findOne(+id);
  }

  @Post('/create')
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Put('/update/:id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: number) {
    return this.postsService.remove(+id);
  }
}
