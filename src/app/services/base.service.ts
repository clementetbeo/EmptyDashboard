import { BaseEntity, Repository } from 'typeorm';
import { Post, Body, Get, Delete, Param, BadRequestException, NotFoundException } from "@nestjs/common";

export class ControllerBase<Entity extends BaseEntity>{
	public constructor(
		private repository: Repository<Entity>
	) { }

	@Post()
	async Save(@Body() entity: any) {
		try {	
			this.repository.save(entity);
		}
		catch (err) {
			throw new BadRequestException("Impossible de creer l'objet");
		}
	}
	@Get()
	async GetAll(): Promise<Entity[]> {
		return this.repository.find();
	}

	@Get(':id')
	async GetOne(@Param() params): Promise<Entity> {
		try {
			const entity = await this.repository.findOne({ where: { id: params.id } });			
			return entity;
		}
		catch (err) {
			console.log(err);
			throw new NotFoundException("Impossible de trouver");
		}
	}

	@Delete(':id')
	async DeleteImage(@Param() params) {
		try {
			const entity = await this.repository.findOne({ where: { id: params.id } });
			await this.repository.remove(entity);
		}
		catch (err) {
			console.log(err);
			throw new BadRequestException("Impossible de supprimer");
		}
	}
}